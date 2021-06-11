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
    public class ExperiencesAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ExperiencesAPI
        public IQueryable<Experience> GetExperiences()
        {
            return db.Experiences;
        }

        // GET: api/ExperiencesAPI/5
        [ResponseType(typeof(Experience))]
        public IHttpActionResult GetExperience(int id)
        {
            Experience experience = db.Experiences.Find(id);
            if (experience == null)
            {
                return NotFound();
            }

            return Ok(experience);
        }
        [ResponseType(typeof(Experience))]
        public IHttpActionResult GetExperience_By_Id(string id1)
        {
            List<Experience> experiences = new List<Experience>();
            experiences = db.Experiences.Where(x => x.studentid == id1).ToList();
            if (experiences.Count() == 0)
            {
                return NotFound();
            }

            return Ok(experiences);
        }

        // PUT: api/ExperiencesAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExperience(int id, Experience experience)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != experience.id)
            {
                return BadRequest();
            }

            db.Entry(experience).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExperienceExists(id))
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

        // POST: api/ExperiencesAPI
        [ResponseType(typeof(Experience))]
        public IHttpActionResult PostExperience(Experience experience)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Experiences.Add(experience);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = experience.id }, experience);
        }

        // DELETE: api/ExperiencesAPI/5
        [ResponseType(typeof(Experience))]
        public IHttpActionResult DeleteExperience(int id)
        {
            Experience experience = db.Experiences.Find(id);
            if (experience == null)
            {
                return NotFound();
            }

            db.Experiences.Remove(experience);
            db.SaveChanges();

            return Ok(experience);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExperienceExists(int id)
        {
            return db.Experiences.Count(e => e.id == id) > 0;
        }
    }
}