using System.Web;
using System.Web.Optimization;

namespace StudentPortalAPI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.min.css",
                      "~/Content/mdb.min.css",
                       "~/Content/fonts.css",
                        "~/Content/all.min.css"
                   //   "~/Content/site.css")
                   ));

            // Angular bundles
            bundles.Add(new ScriptBundle("~/bundles/StudentPortalClient")
              .Include(
                "~/bundles/StudentPortalClientOutput/inline.*",
                "~/bundles/StudentPortalClientOutput/polyfills.*",
                "~/bundles/StudentPortalClientOutput/scripts.*",
                "~/bundles/StudentPortalClientOutput/vendor.*",
                "~/bundles/StudentPortalClientOutput/runtime.*",
                "~/bundles/StudentPortalClientOutput/main.*"));

            bundles.Add(new StyleBundle("~/Content/StudentPortalClient")
              .Include("~/bundles/StudentPortalClientOutput/styles.*"));
        }
    }
}
