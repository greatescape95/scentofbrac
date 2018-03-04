using System;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using RestSharp;
using RestSharp.Authenticators;
using MailKit;
using MailKit.Net.Smtp;
using MimeKit;
using ScentofBracApi.Models;
using System.Web.Http;

namespace ScentofBracApi.Controllers
{
     [Route("api/[Controller]")]
    public class ContactFormController : Controller
    {
        [Route(nameof(SendContactData))]
        [HttpPost]
        public void SendContactData([FromBody] ContactFormData contactForm)
        {
            this.SendSimpleMessage(contactForm);
        }

        private IRestResponse SendSimpleMessage(ContactFormData form = null)
        {
            Console.WriteLine("text2");
            RestClient client = new RestClient();
            client.BaseUrl = new Uri("https://api.mailgun.net/v3");
            client.Authenticator =
                new HttpBasicAuthenticator("api",
                                            "key-083d4570819f908f3561a4f66c6a4fb0");
            RestRequest request = new RestRequest();
            request.AddParameter("domain", "sandboxfd786728ba504d5aa063ea89c9c06786.mailgun.org", ParameterType.UrlSegment);
            request.Resource = "{domain}/messages";
            request.AddParameter("from", "Pošiljatelj preko web forme <postmaster@sandboxfd786728ba504d5aa063ea89c9c06786.mailgun.org>");
            request.AddParameter("to", "winetastingbrac@gmail.com");
            request.AddParameter("subject", "Novi upit preko web kontakt forme");
            request.AddParameter("html", $"<p>Ime: {form.name}</p><br><p>Telefon: {form.phone}</p><br><p>Email: {form.email}</p><br><p>Poruka: {form.message}</p>");
            request.Method = Method.POST;
            return client.Execute(request);
        }
    }
}