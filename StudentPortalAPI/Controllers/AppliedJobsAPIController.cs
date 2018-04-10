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
using StudentPortalAPI.Models;

namespace StudentPortalAPI.Controllers
{
    public class AppliedJobsAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/AppliedJobsAPI
        public IQueryable<AppliedJobs> GetAppliedJobs()
        {
            return db.AppliedJobs;
        }

        // GET: api/AppliedJobsAPI/5
        [ResponseType(typeof(AppliedJobs))]
        public IHttpActionResult GetAppliedJobs(int id)
        {
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            if (appliedJobs == null)
            {
                return NotFound();
            }

            return Ok(appliedJobs);
        }

        // PUT: api/AppliedJobsAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAppliedJobs(int id, AppliedJobs appliedJobs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appliedJobs.id)
            {
                return BadRequest();
            }

            db.Entry(appliedJobs).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppliedJobsExists(id))
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

        // POST: api/AppliedJobsAPI
        [ResponseType(typeof(AppliedJobs))]
        public IHttpActionResult PostAppliedJobs(AppliedJobs appliedJobs)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppliedJobs.Add(appliedJobs);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = appliedJobs.id }, appliedJobs);
        }

        // DELETE: api/AppliedJobsAPI/5
        [ResponseType(typeof(AppliedJobs))]
        public IHttpActionResult DeleteAppliedJobs(int id)
        {
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            if (appliedJobs == null)
            {
                return NotFound();
            }

            db.AppliedJobs.Remove(appliedJobs);
            db.SaveChanges();

            return Ok(appliedJobs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AppliedJobsExists(int id)
        {
            return db.AppliedJobs.Count(e => e.id == id) > 0;
        }
    }
}