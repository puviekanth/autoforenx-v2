import React from "react";

const AttackPath = ({ summaryData }) => {
  const stages = summaryData?.stages || [
    {
      stage: 1,
      label: "Port Scan",
      earliest_time: "2025-07-22T20:53:45",
      victim_ips: ["192.168.2.12"],
      flow_count: 162,
    },
    {
      stage: 2,
      label: "Infiltration",
      earliest_time: "2025-07-22T22:27:38",
      victim_ips: ["192.168.2.12"],
      flow_count: 92,
    },
    {
      stage: 3,
      label: "Privilege Escalation",
      earliest_time: "2025-07-22T23:01:18",
      victim_ips: ["192.168.2.12"],
      flow_count: 55,
    },
  ];

  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString();
  };

  const formatDate = (time) => {
    return new Date(time).toLocaleDateString();
  };

  return (
    <div className="w-full min-h-screen bg-slate-950 text-white p-6 font-tech">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
          Attack Stage Progression
        </h1>

        <p className="text-slate-400 mt-2">
          Timeline:{" "}
          {stages.length > 0
            ? formatDate(stages[0].earliest_time)
            : "No data"}
        </p>
      </div>

      {/* Graph Section */}
      <div className="overflow-x-auto">
        <div className="relative flex items-center min-w-[1000px] px-10 py-20">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.stage}>
              {/* Node */}
              <div className="relative flex flex-col items-center z-10">
                {/* Top Label */}
                <div className="mb-6 text-center">
                  <p className="text-cyan-400 font-semibold text-lg">
                    {stage.label}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {formatTime(stage.earliest_time)}
                  </p>
                </div>

                {/* Circle */}
                <div className="relative">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-red-500 blur-xl opacity-40 animate-pulse"></div>

                  {/* Main Circle */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-4 border-red-300 shadow-2xl flex flex-col items-center justify-center">
                    <span className="text-sm text-slate-200">
                      Step
                    </span>

                    <span className="text-3xl font-bold">
                      {stage.stage}
                    </span>
                  </div>
                </div>

                {/* Victim IPs */}
                <div className="mt-5 flex flex-col items-center">
                  {stage.victim_ips.map((ip, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-200 mb-2"
                    >
                      {ip}
                    </div>
                  ))}
                </div>

                {/* Flow Count */}
                <div className="mt-3 text-center">
                  <p className="text-red-400 font-semibold text-sm">
                    {stage.flow_count} flows
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < stages.length - 1 && (
                <div className="flex-1 relative mx-6">
                  {/* Line */}
                  <div className="h-1 bg-gradient-to-r from-red-500 to-cyan-400 rounded-full"></div>

                  {/* Arrow */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-cyan-400"></div>
                  </div>

                  {/* Edge Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-14 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 shadow-lg min-w-[160px]">
                    <p className="text-cyan-400 text-sm font-semibold text-center">
                      {stages[index + 1].label}
                    </p>

                    <p className="text-xs text-slate-400 text-center mt-1">
                      {formatTime(
                        stages[index + 1].earliest_time
                      )}
                    </p>

                    <p className="text-xs text-red-400 text-center mt-1">
                      {stages[index + 1].flow_count} flows
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-red-500"></div>
          <span className="text-slate-300">Attack Stage</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-cyan-400"></div>
          <span className="text-slate-300">Victim IP</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-1 bg-gradient-to-r from-red-500 to-cyan-400 rounded-full"></div>
          <span className="text-slate-300">Attack Progression</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Attack Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Total Stages
            </p>

            <h3 className="text-3xl font-bold text-white mt-2">
              {stages.length}
            </h3>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Primary Target
            </p>

            <h3 className="text-xl font-bold text-white mt-2">
              {stages[0]?.victim_ips[0] || "N/A"}
            </h3>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm">
              Total Flows
            </p>

            <h3 className="text-3xl font-bold text-red-400 mt-2">
              {stages.reduce(
                (sum, stage) => sum + stage.flow_count,
                0
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttackPath;