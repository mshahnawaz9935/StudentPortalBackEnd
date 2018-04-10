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
using System.Web.Http.Cors;

namespace StudentPortalAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CompaniesAPIController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/CompaniesAPI
        public IQueryable<Company> GetCompanies()
        {
            return db.Companies;
        }

        // GET: api/CompaniesAPI/5
        [ResponseType(typeof(Company))]
        public IHttpActionResult GetCompany(int id)
        {
            Company company = db.Companies.Find(id);
            if (company == null)
            {
                return NotFound();
            }

            return Ok(company);
        }

        // GET: api/CompaniesAPI/GetCompany_ByEmp_Id/asdfghjk
        [ResponseType(typeof(Company))]
        public IHttpActionResult GetCompany_ByEmp_Id(string emp_id)
        {
            Company company = db.Companies.Where(s => s.Emp_Id == emp_id).FirstOrDefault();
            if (company == null)
            {
                return NotFound();
            }

            return Ok(company);
        }

        // PUT: api/CompaniesAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCompany(int id, Company company)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != company.id)
            {
                return BadRequest();
            }

            db.Entry(company).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(id))
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

        // POST: api/CompaniesAPI
        [ResponseType(typeof(Company))]
        public IHttpActionResult PostCompany(Company company)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Companies.Add(company);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = company.id }, company);
        }

        // DELETE: api/CompaniesAPI/5
        [ResponseType(typeof(Company))]
        public IHttpActionResult DeleteCompany(int id)
        {
            Company company = db.Companies.Find(id);
            if (company == null)
            {
                return NotFound();
            }

            db.Companies.Remove(company);
            db.SaveChanges();

            return Ok(company);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CompanyExists(int id)
        {
            return db.Companies.Count(e => e.id == id) > 0;
        }
    }
}