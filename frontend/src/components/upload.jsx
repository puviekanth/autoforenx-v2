import React, { useState, useRef } from "react";

import {
  Shield,
  Upload,
  Play,
  Trash2,
  CheckCircle2,
  Activity,
  History,
  FileText,
  Sparkles,
} from "lucide-react";

export default function UploadLogs() {
  const [windowsLog, setWindowsLog] = useState(null);
  const [pfSenseLog, setPfSenseLog] = useState(null);

  const [isAnalyzing, setIsAnalyzing] =useState(false);

  const windowsRef = useRef(null);
  const pfSenseRef = useRef(null);


  const handleWindowsLog = (e) => {
    const file = e.target.files[0];

    if (file) {
      setWindowsLog(file);
    }
  };

  const handlePfSenseLog = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPfSenseLog(file);
    }
  };


  const startAnalysis = async () => {
    setIsAnalyzing(true);

    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2500);
  };

  const clearFiles = () => {
    setWindowsLog(null);
    setPfSenseLog(null);

    if (windowsRef.current) {
      windowsRef.current.value = "";
    }

    if (pfSenseRef.current) {
      pfSenseRef.current.value = "";
    }
  };


  const analysisHistory = [
    {
      time: "Today • 8:07 PM",
      status: "Success",
    },
    {
      time: "Today • 7:47 PM",
      status: "Success",
    },
    {
      time: "Yesterday • 11:21 PM",
      status: "Success",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
       

        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-lg">
                <Shield
                  className="text-cyan-400"
                  size={28}
                />
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-wide">
                  Upload Logs
                </h1>

                <p className="text-slate-400 mt-1">
                  Analyze firewall and network logs
                  for suspicious traffic patterns and
                  security threats.
                </p>
              </div>
            </div>
          </div>

          

          <div className="hidden md:flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-3 rounded-2xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-green-400 font-medium">
              AI Models Active
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">

            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles
                  className="text-cyan-400"
                  size={22}
                />

                <h2 className="text-xl font-semibold">
                  Analysis Model Status
                </h2>
              </div>

              <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-5 py-4 rounded-2xl">
                <CheckCircle2
                  className="text-green-400"
                  size={22}
                />

                <div>
                  <p className="text-green-400 font-semibold">
                    Analysis models are ready
                  </p>

                  <p className="text-slate-400 text-sm">
                    Detection engine initialized
                    successfully
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <h2 className="text-xl font-semibold mb-6">
                Upload Log Files
              </h2>

              <div className="space-y-6">
                
                

                <div>
                  <label className="text-slate-300 font-medium block mb-3">
                    Windows Firewall Log (.log)
                  </label>

                  <div className="border border-slate-700 bg-slate-900/60 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          windowsRef.current.click()
                        }
                        className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center gap-2"
                      >
                        <Upload size={18} />

                        Choose File
                      </button>

                      <div className="text-slate-400 text-sm">
                        {windowsLog
                          ? windowsLog.name
                          : "No file selected"}
                      </div>
                    </div>

                    <input
                      type="file"
                      accept=".log"
                      ref={windowsRef}
                      onChange={handleWindowsLog}
                      className="hidden"
                    />

                    {windowsLog && (
                      <div className="mt-4 flex items-center gap-2 text-green-400">
                        <CheckCircle2 size={18} />

                        <span className="text-sm">
                          {windowsLog.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                

                <div>
                  <label className="text-slate-300 font-medium block mb-3">
                    pfSense Log (.txt)
                  </label>

                  <div className="border border-slate-700 bg-slate-900/60 rounded-2xl p-5">
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          pfSenseRef.current.click()
                        }
                        className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center gap-2"
                      >
                        <Upload size={18} />

                        Choose File
                      </button>

                      <div className="text-slate-400 text-sm">
                        {pfSenseLog
                          ? pfSenseLog.name
                          : "No file selected"}
                      </div>
                    </div>

                    <input
                      type="file"
                      accept=".txt"
                      ref={pfSenseRef}
                      onChange={handlePfSenseLog}
                      className="hidden"
                    />

                    {pfSenseLog && (
                      <div className="mt-4 flex items-center gap-2 text-green-400">
                        <CheckCircle2 size={18} />

                        <span className="text-sm">
                          {pfSenseLog.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

           

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={startAnalysis}
                  disabled={isAnalyzing}
                  className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 shadow-xl font-semibold flex items-center gap-3 disabled:opacity-50"
                >
                  <Play size={20} />

                  {isAnalyzing
                    ? "Analyzing..."
                    : "Start Analysis"}
                </button>

                <button
                  onClick={clearFiles}
                  className="px-6 py-4 rounded-2xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-all duration-300 font-semibold flex items-center gap-3"
                >
                  <Trash2 size={20} />

                  Clear Files
                </button>
              </div>
            </div>
          </div>

          

          <div className="space-y-6">
            
            

            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Activity
                  className="text-orange-400"
                  size={22}
                />

                <h2 className="text-xl font-semibold">
                  Analysis Results
                </h2>
              </div>

              <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-5">
                <p className="text-slate-400 text-sm mb-2">
                  Flows Detected
                </p>

                <h3 className="text-5xl font-bold text-white">
                  254
                </h3>

                <p className="text-green-400 text-sm mt-3">
                  +12% from previous scan
                </p>
              </div>
            </div>

            

            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <History
                  className="text-yellow-400"
                  size={22}
                />

                <h2 className="text-xl font-semibold">
                  Recent Analysis
                </h2>
              </div>

              <div className="space-y-4">
                {analysisHistory.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/60 border border-slate-700 rounded-2xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-300">
                            {item.time}
                          </p>

                          <div className="flex items-center gap-2 mt-2 text-green-400">
                            <CheckCircle2
                              size={16}
                            />

                            <span className="text-sm font-medium">
                              {item.status}
                            </span>
                          </div>
                        </div>

                        <FileText
                          className="text-cyan-400"
                          size={20}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}