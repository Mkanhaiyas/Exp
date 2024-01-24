export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="bg-blue-950 h-full w-1/6">
        <img src="/CoinSpector_Logo.png" alt="CoinSpector Logo" />
        <div className="pl-5 pt-5 text-white flex-col text-sm cursor-pointer">
          <div className="flex flex-row p-2 items-center">
            <img src="/home.png" alt="Home Logo" className="size-4 mx-2" /> Home
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img
              src="/Image Crypto Node.png"
              alt="Image Crypto Logo"
              className="size-4 mx-2"
            />
            Image Crypto Node
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img
              src="/Transaction Analysis.png"
              alt="Home Logo"
              className="size-4 mx-2"
            />
            Transaction Analysis
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img
              src="/wallet Analysis.png"
              alt="Home Logo"
              className="size-4 mx-2"
            />{" "}
            Analysis
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img
              src="/Visualization.png"
              alt="Home Logo"
              className="size-4 mx-2"
            />
            Visualization
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img
              src="/Search Artifacts.png"
              alt="Home Logo"
              className="size-4 mx-2"
            />{" "}
            Watch List
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img src="/Reporting.png" alt="Home Logo" className="size-4 mx-2" />
            Reporting
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img src="/settings.png" alt="Home Logo" className="size-4 mx-2" />
            Settings
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
            Support
          </div>
          <div className="flex flex-row p-2 items-center text-sm cursor-pointer">
            <img src="/home.png" alt="Home Logo" className="size-4 mx-2" />
            Chart Test
          </div>
        </div>
      </div>
    </main>
  );
}
