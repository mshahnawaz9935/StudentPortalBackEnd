using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using StudentPortal.Models;

namespace StudentPortal.Controllers
{
    public class AppliedJobsController : Controller
    {
        private StudentPortalContext db = new StudentPortalContext();

        // GET: AppliedJobs
        public ActionResult Index()
        {
            return View(db.AppliedJobs.ToList());
        }

        // GET: AppliedJobs/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            if (appliedJobs == null)
            {
                return HttpNotFound();
            }
            return View(appliedJobs);
        }

        // GET: AppliedJobs/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: AppliedJobs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,studentid,companyid,jobid,applydate")] AppliedJobs appliedJobs)
        {
            if (ModelState.IsValid)
            {
                db.AppliedJobs.Add(appliedJobs);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(appliedJobs);
        }

        // GET: AppliedJobs/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            if (appliedJobs == null)
            {
                return HttpNotFound();
            }
            return View(appliedJobs);
        }

        // POST: AppliedJobs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,studentid,companyid,jobid,applydate")] AppliedJobs appliedJobs)
        {
            if (ModelState.IsValid)
            {
                db.Entry(appliedJobs).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(appliedJobs);
        }

        // GET: AppliedJobs/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            if (appliedJobs == null)
            {
                return HttpNotFound();
            }
            return View(appliedJobs);
        }

        // POST: AppliedJobs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            AppliedJobs appliedJobs = db.AppliedJobs.Find(id);
            db.AppliedJobs.Remove(appliedJobs);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
