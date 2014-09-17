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
publicclassWebServer 
    {
        ///<summary>
/// Access to the current instance of <see cref="WebServer"/>
///</summary>
publicstaticWebServerCurrent { get; privateset; }

        ///<summary>
/// The current settings
///</summary>
publicISettingsSettings { get; privateset; }

        privateWebServiceHosthost;
        privatereadonlyILoggerlogger;

        ///<summary>
/// New WebServer
///</summary>
///<param name="logger"><see cref="ILogger"/></param>
///<param name="settings">Settings</param>
publicWebServer(ILoggerlogger, ISettingssettings)
        {
            this.logger=logger;
            Settings=settings;
            Current=this;
        }

        ///<summary>
/// Start a new server
///</summary>
publicvoidStart()
        {
            logger.Info("Initialising the web server");
            host=newWebServiceHost(typeof(FaxManagerService), newUri("http://localhost:"+Settings.WebServerPort+"/"));
            varbindings=newWebHttpBinding();

            host.AddServiceEndpoint(typeof(IFaxManagerService), bindings, "");
            host.Description.Behaviors.Add(newSessionAwareAttribute());

            varsdb=host.Description.Behaviors.Find<ServiceDebugBehavior>();
            sdb.HttpHelpPageEnabled=false;
            
            logger.Info("Starting the web server");
            host.Open();
            logger.Info("The web server was started successfully on port "+Settings.WebServerPort);
        }

        ///<summary>
/// Restart the server (effectively creating a new service host)
///</summary>
publicvoidRestart()
        {
            Stop();
            Start();
        }

        ///<summary>
/// Stop the server
///</summary>
publicvoidStop()
        {
            host.Close();
            host=null;
        }
    }
```





the "Web Application" is a WCF ServiceContract named IFaxManaderService.

I'll post about it, and about interesting related stuff later on

