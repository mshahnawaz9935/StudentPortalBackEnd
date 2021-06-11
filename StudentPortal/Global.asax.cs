using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Http;
namespace StudentPortal
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Session_Start(Object sender, EventArgs e)
        {
            Session["username"] = "";
        }
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
          
        }
    }
}
