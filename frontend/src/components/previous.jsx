import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  Database,
  Activity,
  ShieldAlert,
  Bug,
  FolderOpen,
  Layers3,
  TriangleAlert,
  ChevronRight,
  Radar,
  ServerCrash,
  Cpu,
} from "lucide-react";

export default function PreviousScans() {
  const [selectedScan, setSelectedScan] = useState(0);

  const scans = [
    {
      id: 1,
      date: "08/11/2025",
      time: "08:45:00",
      totalLogs: "73,000",
      flows: "1,245",
      suspicious: "790",
      clusters: "3",
      files: "2",
      threats: "3",
      severity: "Critical",
    },

    {
      id: 2,
      date: "09/11/2025",
      time: "09:20:00",
      totalLogs: "61,000",
      flows: "985",
      suspicious: "520",
      clusters: "4",
      files: "3",
      threats: "2",
      severity: "Medium",
    },

    {
      id: 3,
      date: "11/11/2025",
      time: "11:02:00",
      totalLogs: "84,000",
      flows: "1,680",
      suspicious: "1,020",
      clusters: "5",
      files: "5",
      threats: "4",
      severity: "High",
    },

    {
      id: 4,
      date: "12/11/2025",
      time: "14:40:00",
      totalLogs: "104,000",
      flows: "2,540",
      suspicious: "1,840",
      clusters: "7",
      files: "7",
      threats: "8",
      severity: "Critical",
    },
  ];

  const current = scans[selectedScan];

  const getSeverityColor = (severity) => {
    if (severity === "Critical") {
      return "bg-red-500/15 text-red-400 border-red-500/20";
    }

    if (severity === "High") {
      return "bg-orange-500/15 text-orange-400 border-orange-500/20";
    }

    return "bg-cyan-500/15 text-cyan-400 border-cyan-500/20";
  };

  return (
    <section className="h-screen overflow-hidden bg-[#020617] text-white font-tech">
      <div className="h-full p-6">
        
        {/* MAIN WRAPPER */}
        <div className="grid h-full grid-cols-1 gap-6 xl:grid-cols-[420px_1fr]">
          
          {/* ================= LEFT SIDE ================= */}

          <div className="flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-800 bg-[#0B1120] shadow-[0_0_50px_rgba(0,255,255,0.03)]">
            
            {/* HEADER */}
            <div className="border-b border-slate-800 px-7 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                    Threat Intelligence
                  </p>

                  <h1 className="mt-3 text-[34px] font-bold tracking-tight">
                    Previous Scans
                  </h1>
                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                  <Radar className="text-cyan-400" size={28} />
                </div>
              </div>

              <p className="mt-4 text-[15px] leading-7 text-slate-400">
                Review historical analysis sessions, inspect detected attack
                stages and reload forensic intelligence data.
              </p>
            </div>

            {/* SCAN LIST */}
            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
              <div className="space-y-5">
                {scans.map((scan, index) => (
                  <button
                    key={scan.id}
                    onClick={() => setSelectedScan(index)}
                    className={`group w-full rounded-[28px] border text-left transition-all duration-300 ${
                      selectedScan === index
                        ? "border-cyan-500/30 bg-cyan-500/[0.08] shadow-[0_0_25px_rgba(34,211,238,0.08)]"
                        : "border-slate-800 bg-[#0F172A] hover:border-cyan-500/20 hover:bg-[#111827]"
                    }`}
                  >
                    <div className="p-6">
                      
                      {/* TOP */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <CalendarDays
                              size={18}
                              className="text-cyan-400"
                            />

                            <h2 className="text-[18px] font-semibold">
                              {scan.date}
                            </h2>
                          </div>

                          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                            <Clock3 size={15} />
                            {scan.time}
                          </div>
                        </div>

                        <ChevronRight
                          className={`transition-all ${
                            selectedScan === index
                              ? "translate-x-1 text-cyan-400"
                              : "text-slate-500"
                          }`}
                        />
                      </div>

                      {/* STATS */}
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <MiniStat
                          label="Flows"
                          value={scan.flows}
                        />

                        <MiniStat
                          label="Threats"
                          value={scan.threats}
                        />

                        <MiniStat
                          label="Files"
                          value={scan.files}
                        />

                        <MiniStat
                          label="Clusters"
                          value={scan.clusters}
                        />
                      </div>

                      {/* FOOTER */}
                      <div className="mt-6 flex items-center justify-between">
                        <div
                          className={`rounded-full border px-3 py-1 text-xs font-semibold ${getSeverityColor(
                            scan.severity
                          )}`}
                        >
                          {scan.severity}
                        </div>

                        <p className="text-sm text-slate-500">
                          {scan.totalLogs} logs
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="h-full overflow-y-auto rounded-[32px] border border-slate-800 bg-[#0B1120] shadow-[0_0_50px_rgba(0,255,255,0.03)] custom-scrollbar">
            
            {/* HEADER */}
            <div className="border-b border-slate-800 px-8 py-7">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                    Scan Overview
                  </p>

                  <h1 className="mt-3 text-[42px] font-bold tracking-tight">
                    {current.date}
                  </h1>

                  <p className="mt-3 text-[15px] text-slate-400">
                    Session executed at {current.time}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500 hover:text-cyan-400">
                    Export Report
                  </button>

                  <button className="rounded-2xl border border-cyan-500 bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                    Load Analysis
                  </button>
                </div>
              </div>
            </div>

            {/* BODY */}
            <div className="p-8">
              
              {/* METRICS */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
                <MetricCard
                  icon={<Database size={28} />}
                  title="Total Log Lines"
                  value={current.totalLogs}
                  color="text-cyan-400"
                />

                <MetricCard
                  icon={<Activity size={28} />}
                  title="Network Flows"
                  value={current.flows}
                  color="text-green-400"
                />

                <MetricCard
                  icon={<ShieldAlert size={28} />}
                  title="Suspicious"
                  value={current.suspicious}
                  color="text-red-400"
                />

                <MetricCard
                  icon={<Bug size={28} />}
                  title="Threat Clusters"
                  value={current.clusters}
                  color="text-orange-400"
                />
              </div>

              {/* ANALYSIS GRID */}
              <div className="mt-8 grid grid-cols-1 gap-6 2xl:grid-cols-[1.1fr_0.9fr]">
                
                {/* LEFT */}
                <div className="rounded-[28px] border border-slate-800 bg-[#0F172A] p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                        Threat Intelligence
                      </p>

                      <h2 className="mt-3 text-2xl font-bold">
                        Detection Summary
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-red-500/10 p-4">
                      <ServerCrash
                        className="text-red-400"
                        size={26}
                      />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <ThreatRow
                      title="Port Scanning"
                      severity="Critical"
                      count="183 Flows"
                    />

                    <ThreatRow
                      title="Privilege Escalation"
                      severity="High"
                      count="82 Flows"
                    />

                    <ThreatRow
                      title="DOS Attack"
                      severity="Medium"
                      count="54 Flows"
                    />

                    <ThreatRow
                      title="Brute Force"
                      severity="High"
                      count="29 Flows"
                    />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="rounded-[28px] border border-slate-800 bg-[#0F172A] p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                        Infrastructure
                      </p>

                      <h2 className="mt-3 text-2xl font-bold">
                        Environment Stats
                      </h2>
                    </div>

                    <div className="rounded-2xl bg-cyan-500/10 p-4">
                      <Cpu
                        className="text-cyan-400"
                        size={26}
                      />
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <EnvironmentRow
                      label="Files Processed"
                      value={current.files}
                    />

                    <EnvironmentRow
                      label="Threat Clusters"
                      value={current.clusters}
                    />

                    <EnvironmentRow
                      label="Detected Threats"
                      value={current.threats}
                    />

                    <EnvironmentRow
                      label="Packet Analysis"
                      value="Completed"
                    />
                  </div>
                </div>
              </div>

              {/* TIMELINE */}
              <div className="mt-8 rounded-[28px] border border-slate-800 bg-[#0F172A] p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                      Attack Timeline
                    </p>

                    <h2 className="mt-3 text-2xl font-bold">
                      Attack Progression
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <TimelineCard
                    stage="Stage 1"
                    title="Port Scanning Activity"
                    time="09:20 AM"
                    severity="Critical"
                  />

                  <TimelineCard
                    stage="Stage 2"
                    title="Infiltration Attempt"
                    time="10:12 AM"
                    severity="High"
                  />

                  <TimelineCard
                    stage="Stage 3"
                    title="Privilege Escalation"
                    time="11:48 AM"
                    severity="High"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= METRIC CARD ================= */

function MetricCard({ icon, title, value, color }) {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-[#0F172A] p-6 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#111827]">
      <div className={`${color}`}>{icon}</div>

      <h2 className="mt-6 text-[38px] font-bold tracking-tight">
        {value}
      </h2>

      <p className="mt-3 text-[15px] text-slate-400">
        {title}
      </p>
    </div>
  );
}

/* ================= MINI STAT ================= */

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-[#020617] p-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {value}
      </h3>
    </div>
  );
}

/* ================= THREAT ROW ================= */

function ThreatRow({ title, severity, count }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#020617] p-5">
      <div>
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {count}
        </p>
      </div>

      <div
        className={`rounded-full border px-4 py-1 text-xs font-semibold ${
          severity === "Critical"
            ? "border-red-500/20 bg-red-500/15 text-red-400"
            : severity === "High"
            ? "border-orange-500/20 bg-orange-500/15 text-orange-400"
            : "border-cyan-500/20 bg-cyan-500/15 text-cyan-400"
        }`}
      >
        {severity}
      </div>
    </div>
  );
}

/* ================= ENVIRONMENT ROW ================= */

function EnvironmentRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-[#020617] px-5 py-4">
      <p className="text-[15px] text-slate-400">
        {label}
      </p>

      <p className="text-lg font-semibold">
        {value}
      </p>
    </div>
  );
}

/* ================= TIMELINE ================= */

function TimelineCard({
  stage,
  title,
  time,
  severity,
}) {
  return (
    <div className="flex items-center justify-between rounded-[24px] border border-slate-800 bg-[#020617] p-6 transition-all hover:border-cyan-500/20">
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 font-bold">
          {stage.split(" ")[1]}
        </div>

        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            First detected at {time}
          </p>
        </div>
      </div>

      <div
        className={`rounded-full border px-4 py-1 text-xs font-semibold ${
          severity === "Critical"
            ? "border-red-500/20 bg-red-500/15 text-red-400"
            : "border-orange-500/20 bg-orange-500/15 text-orange-400"
        }`}
      >
        {severity}
      </div>
    </div>
  );
}