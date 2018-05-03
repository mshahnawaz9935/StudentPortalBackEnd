using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Web.Http.Cors;

namespace StudentPortalAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));
            config.Formatters.XmlFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("multipart/form-data"));
            // Web API routes
            config.MapHttpAttributeRoutes();
         //   var cors = new EnableCorsAttribute("*",
         //                                      "Origin, Content-Type, Accept",
         //                                      "GET, PUT, POST, DELETE, OPTIONS");
         //   config.EnableCors(cors);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                  name: "DefaultApi1",
                  routeTemplate: "api/{controller}/{action}/{id1}",
                  defaults: new { id1 = RouteParameter.Optional }
             );
            


        }
    }
    }

