using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using StudentPortal.Models;
using System.Web;
using System.Web.SessionState;
using System.Web.Mvc;
using System.Web.Routing;
using Newtonsoft.Json;

namespace StudentPortal.APIControllers
{
    public class UsersAPIController : ApiController
    {
        private StudentPortalContext db = new StudentPortalContext();

        // GET: api/UsersAPI
        public IQueryable<User> GetUsers()
        {
            return db.Users;
        }

        // GET: api/UsersAPI/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUsername(string id, string pwd)
        {
            User user = db.Users.Where(i => i.username == id).FirstOrDefault();
            if (user == null)
            {
                return NotFound();
            }
            else if (user.password == pwd)
            {


             //   Session["username"] = "fghjbn";

                return Ok(user);
            }
            else
            {
                string jsonRes = JsonConvert.SerializeObject("No User data");
                return Content(HttpStatusCode.Created, jsonRes);
            }


        }

        // PUT: api/UsersAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.id)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/UsersAPI
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = user.id }, user);
        }

        // DELETE: api/UsersAPI/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.id == id) > 0;
        }
    }
}