enable web api auth
install cors package
  config.EnableCors(new EnableCorsAttribute("*", "*", "*")) in webapiconfig.cs
