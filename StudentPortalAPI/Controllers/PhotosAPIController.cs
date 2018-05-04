using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Web.Http.Description;
using Newtonsoft.Json;
using StudentPortalAPI.Models;

namespace StudentPortalAPI.Controllers
{
    //public class PhotoModel
    //{
    //    public Photo photo { get; set; }
    //    public HttpPostedFileBase file { get; set; }
    //}
    public class PhotosAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/PhotosAPI
        public IQueryable<Photo> GetPhotos()
        {
            return db.Photos;
        }

        // GET: api/PhotosAPI/5
        [ResponseType(typeof(Photo))]
        public async Task<IHttpActionResult> GetPhoto(int id)
        {
            Photo photo = await db.Photos.FindAsync(id);
            if (photo == null)
            {
                return NotFound();
            }

            return Ok(photo);
        }

        // PUT: api/PhotosAPI/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutPhoto(int id, Photo photo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != photo.id)
            {
                return BadRequest();
            }

            db.Entry(photo).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhotoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PhotosAPI
        [ResponseType(typeof(Photo))]
        public async Task<IHttpActionResult> PostPhoto()
        {
            string root = HttpContext.Current.Server.MapPath("~/App_Data");
            var provider = new MultipartFormDataStreamProvider(root);
            Stream reqStream = Request.Content.ReadAsStreamAsync().Result;
            MemoryStream tempStream = new MemoryStream();
            reqStream.Position = 0;
            reqStream.CopyTo(tempStream);

            tempStream.Seek(0, SeekOrigin.End);
            StreamWriter writer = new StreamWriter(tempStream);
            writer.WriteLine();
            writer.Flush();
            tempStream.Position = 0;

            StreamContent streamContent = new StreamContent(tempStream);

            foreach (var header in Request.Content.Headers)
            {
                streamContent.Headers.Add(header.Key, header.Value);
            }
            try
            {
                var filesReadToProvider = await streamContent.ReadAsMultipartAsync(provider);
                var image_name = filesReadToProvider.FormData["name"];
                var studentid = filesReadToProvider.FormData["studentid"];
            }
            catch(Exception e) { }

            Photo p = new Photo();


            var file = HttpContext.Current.Request.Files.Count > 0 ?
       HttpContext.Current.Request.Files[0] : null;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (file != null)
            {

                file.SaveAs(HostingEnvironment.MapPath("~/Images/")
                                                      + file.FileName);
                p.image_name = file.FileName;
            }
            db.Photos.Add(p);

            await db.SaveChangesAsync();

            return Ok(p);
        }

        // DELETE: api/PhotosAPI/5
        [ResponseType(typeof(Photo))]
        public async Task<IHttpActionResult> DeletePhoto(int id)
        {
            Photo photo = await db.Photos.FindAsync(id);
            if (photo == null)
            {
                return NotFound();
            }

            db.Photos.Remove(photo);
            await db.SaveChangesAsync();

            return Ok(photo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PhotoExists(int id)
        {
            return db.Photos.Count(e => e.id == id) > 0;
        }
    }
}