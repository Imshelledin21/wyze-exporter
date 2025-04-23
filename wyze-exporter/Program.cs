using System.Security.Cryptography;
using System.Threading;
using Prometheus;

internal class Program
{
    private static void Main(string[] args)
    {
        KestrelMetricServer metricsServer = new KestrelMetricServer(8000, "/metrics");
        metricsServer.Start();

        while (true)
        {
            Console.WriteLine("Hello");
            Thread.Sleep(300000);
            
        }
    }
}