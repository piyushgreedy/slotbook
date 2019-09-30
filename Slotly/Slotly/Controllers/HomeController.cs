using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Slotly.Models;
using RequestHandlers;

namespace Slotly.Controllers
{
    public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
            var userName = Request.Query["id"];
            Console.WriteLine("piyushindex");
            ViewData["userName"] = userName.ToString().ToUpper();
            if (String.IsNullOrEmpty(ViewData["userName"].ToString())){
                ViewData["userName"] = "Guest User. Please Login to Book Computer Time Slot";
            }
            return View();
           
        }

        public IActionResult About()
        {   
            Console.WriteLine("piyushabout");
            ViewData["Message"] = "Your application description page.";
            return View();
        }

        [HttpGet]
        public IActionResult ReceiveWithRequestFormData(string username, string password)
        {
            System.Diagnostics.Debug.WriteLine("Request Form Data");
            System.Diagnostics.Debug.WriteLine("username");
            //return Content("Login successful !"+ username);
            LoginContext loginContext = HttpContext.RequestServices.GetService(typeof(LoginContext)) as LoginContext;
            Boolean isAuthorised = loginContext.verifyLoginValues(username,password);
            if (isAuthorised){
                string url = string.Format("/Home/Index?id={0}", username);
                return Redirect(url);
            }
            else {
                return Content("UnAuthorised");
            }   
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View();
        }
    }
}
