---
layout: post
title:  "Mini web server using WCF"
comments: true
tags: [c-sharp]
---


I've written a simple application for a friend that monitors the fax machine in his office.

The machine saves incoming messages in the files server, and he needed a way to manipulate the files in various ways. 

One of the things he wanted was the ability to present data and allow actions to run over the web. Also 

As he's thinking of deploying this on multiple different sites, and would like to be able to set this up easily without configuring web servers etc., and as there's hardly any server-side logic to the UI anyway (the front is JSON consuming jQuery site), and there's a windows service in there anyway for running some recurring tasks, I decided to set up the UI as a WCF service with WebHttpBinding, hosted within the Windows Service.



Here's the code for the "Web Server":



```
///<summary>
/// Serving HTTP for the UI
///</summary>

public class WebServer 
{
    ///<summary>
    /// Access to the current instance of <see cref="WebServer"/>
    ///</summary>
    public static WebServer Current { get; private set; }
    
    ///<summary>
    /// The current settings
    ///</summary>
    public ISettings Settings { get; private set; }
    
    private WebServiceHost host;
    private readonly ILogger logger;

    ///<summary>
    /// New WebServer
    ///</summary>
    ///<param name="logger"><see cref="ILogger"/></param>
    ///<param name="settings">Settings</param>
    public WebServer(ILogger logger, ISettings settings)
    {
        this.logger=logger;
        Settings=settings;
        Current=this;
    }

    ///<summary>
    /// Start a new server
    ///</summary>
    public void Start()
    {
        logger.Info("Initialising the web server");
        host = new WebServiceHost(typeof(FaxManagerService), newUri("http://localhost:"+Settings.WebServerPort+"/"));
        var bindings = new WebHttpBinding();

        host.AddServiceEndpoint(typeof(IFaxManagerService), bindings, "");
        host.Description.Behaviors.Add(new SessionAwareAttribute());

        var sdb=host.Description.Behaviors.Find<ServiceDebugBehavior>();
        sdb.HttpHelpPageEnabled = false;
            
        logger.Info("Starting the web server");
        host.Open();
        logger.Info("The web server was started successfully on port "+Settings.WebServerPort);
    }

    ///<summary>
    /// Restart the server (effectively creating a new service host)
    ///</summary>
    public void Restart()
    {
        Stop();
        Start();
    }

    ///<summary>
    /// Stop the server
    ///</summary>
    public void Stop()
    {
        host.Close();
        host = null;
    }
}
```





the "Web Application" is a WCF ServiceContract named IFaxManagerService.

I'll post about it, and about interesting related stuff later on

