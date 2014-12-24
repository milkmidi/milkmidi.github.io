<%@ WebHandler Language="C#" Class="Portfolio" %>

#region Imports

using System;
using System.Web;
using Jayrock.Json;
using Jayrock.JsonRpc;
using Jayrock.JsonRpc.Web;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Net;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.OleDb;
using System.Data.Common;
using System.Web.Script.Serialization;
using System.Web.SessionState;

#endregion


public class Portfolio : JsonRpcHandler, IRequiresSessionState
{
    
  


    [JsonRpcMethod("test")]
    public object test(string value) {       
        return new
        {
            RS = "OK",
            data = value,
             
        };
    }

    [JsonRpcMethod( "getAndroid" )]
    [JsonRpcHelp( "getAndroid" )]
    public object getAndroid(  ) {       
        
        return new
        {
            RS = "OK"
           
        };
    }

    class PortfolioVO {
        public string title;
        public string date;
        public string imgURL;
        public string description;
        
    }

}

