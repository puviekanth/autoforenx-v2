import React from "react";
import { ArrowLeft, ShieldAlert, Activity, Bug, Database } from "lucide-react";

function Summary() {
  // ================= STATIC DATA =================

  const analysisData = {
    companyName: "AutoForenX Security Labs",
    email: "analyst@autoforenx.com",
    analysisDate: "2026-05-19T12:30:00",

    analysisResult: {
      total_flows: 1245,

      analysis_summary: {
        total_files_processed: 4,
        unique_attack_types: 3,
      },

      file_stats: {
        windows: {
          total_lines: 42000,
          suspicious_packets: 560,
          flows: 420,
        },

        pfsense: {
          total_lines: 31000,
          suspicious_packets: 230,
          flows: 210,
        },
      },

      stages: [
        {
          stage: 1,
          label: "Port Scan",
          flow_count: 180,
          earliest_time: "2026-05-19T09:20:00",
          victim_ips: ["192.168.1.10"],
        },

        {
          stage: 2,
          label: "Infiltration",
          flow_count: 90,
          earliest_time: "2026-05-19T10:10:00",
          victim_ips: ["192.168.1.10"],
        },

        {
          stage: 3,
          label: "Privilege Escalation",
          flow_count: 42,
          earliest_time: "2026-05-19T11:45:00",
          victim_ips: ["192.168.1.10"],
        },
      ],

      clusters: [
        {
          cluster: 1,
          label: "PortScan",
          flow_count: 180,
          distance: 0.87,
        },

        {
          cluster: 2,
          label: "DOS",
          flow_count: 74,
          distance: 0.62,
        },

        {
          cluster: 3,
          label: "Brute Force",
          flow_count: 38,
          distance: 0.41,
        },
      ],
    },
  };

  // ================= HELPERS =================

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const calculateTotalSuspiciousPackets = () => {
    return (
      analysisData.analysisResult.file_stats.windows.suspicious_packets +
      analysisData.analysisResult.file_stats.pfsense.suspicious_packets
    );
  };

  const calculateTotalLines = () => {
    return (
      analysisData.analysisResult.file_stats.windows.total_lines +
      analysisData.analysisResult.file_stats.pfsense.total_lines
    );
  };

  const getRiskLevel = (count) => {
    if (count > 100) return "High";
    if (count > 50) return "Medium";
    return "Low";
  };

  const getRiskColor = (count) => {
    if (count > 100) {
      return "bg-red-500/20 text-red-400 border-red-500/30";
    }

    if (count > 50) {
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    }

    return "bg-green-500/20 text-green-400 border-green-500/30";
  };

  const getMitigationStatus = (type) => {
    const actions = {
      PortScan: "Block attacker IP",
      DOS: "Enable rate limiting",
      "Brute Force": "Lock suspicious accounts",
    };

    return actions[type] || "Monitor activity";
  };

  // ================= VALUES =================

  const totalLines = calculateTotalLines();

  const totalSuspiciousPackets =
    calculateTotalSuspiciousPackets();

  const totalFlows =
    analysisData.analysisResult.total_flows;

  const clusters =
    analysisData.analysisResult.clusters;

  const stages =
    analysisData.analysisResult.stages;

  // ================= UI =================

  return (
    <section className="min-h-screen bg-slate-950 text-white p-6 font-tech">
      {/* Back Button */}

      <button className="flex items-center gap-2 border border-slate-700 hover:border-cyan-400 hover:bg-slate-900 transition-all duration-300 rounded-xl px-4 py-2 mb-8">
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Header */}

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-cyan-400">
          Security Analysis Summary
        </h1>

        <p className="text-slate-400 mt-2">
          Generated on{" "}
          {formatDate(analysisData.analysisDate)}
        </p>
      </div>

      {/* Metric Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all">
          <Database className="text-cyan-400 mb-4" size={30} />

          <h2 className="text-4xl font-bold">
            {totalLines.toLocaleString()}
          </h2>

          <p className="text-slate-400 mt-2">
            Total Log Lines
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all">
          <Activity className="text-green-400 mb-4" size={30} />

          <h2 className="text-4xl font-bold">
            {totalFlows}
          </h2>

          <p className="text-slate-400 mt-2">
            Network Flows
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all">
          <ShieldAlert className="text-red-400 mb-4" size={30} />

          <h2 className="text-4xl font-bold text-red-400">
            {totalSuspiciousPackets}
          </h2>

          <p className="text-slate-400 mt-2">
            Suspicious Packets
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-lg hover:scale-[1.02] transition-all">
          <Bug className="text-orange-400 mb-4" size={30} />

          <h2 className="text-4xl font-bold text-orange-400">
            {clusters.length}
          </h2>

          <p className="text-slate-400 mt-2">
            Threat Clusters
          </p>
        </div>
      </div>

      {/* Analysis Details */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Analysis Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <DetailCard
            label="Files Processed"
            value={
              analysisData.analysisResult.analysis_summary
                .total_files_processed
            }
          />

          <DetailCard
            label="Unique Attack Types"
            value={
              analysisData.analysisResult.analysis_summary
                .unique_attack_types
            }
          />

          <DetailCard
            label="Company"
            value={analysisData.companyName}
          />

          <DetailCard
            label="Analyst"
            value={analysisData.email}
          />
        </div>
      </div>

      {/* Attack Stages */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8">
          Attack Stages Detected
        </h2>

        <div className="space-y-5">
          {stages.map((stage) => (
            <div
              key={stage.stage}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-5 hover:border-cyan-500 transition-all"
            >
              <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Stage {stage.stage} — {stage.label}
                  </h3>

                  <p className="text-slate-400 mt-2">
                    First Seen:{" "}
                    {formatDate(stage.earliest_time)}
                  </p>

                  <p className="text-slate-400 mt-1">
                    Target IPs:{" "}
                    {stage.victim_ips.join(", ")}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-red-400 text-3xl font-bold">
                    {stage.flow_count}
                  </p>

                  <p className="text-slate-400">
                    Suspicious Flows
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Threat Table */}

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-x-auto">
        <h2 className="text-2xl font-bold text-cyan-400 mb-8">
          Threat Cluster Analysis
        </h2>

        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-slate-800">
              <th className="text-left py-4 text-slate-400">
                Cluster
              </th>

              <th className="text-left py-4 text-slate-400">
                Threat Type
              </th>

              <th className="text-left py-4 text-slate-400">
                Flow Count
              </th>

              <th className="text-left py-4 text-slate-400">
                Risk Level
              </th>

              <th className="text-left py-4 text-slate-400">
                Recommended Action
              </th>

              <th className="text-left py-4 text-slate-400">
                Distance Score
              </th>
            </tr>
          </thead>

          <tbody>
            {clusters.map((cluster) => (
              <tr
                key={cluster.cluster}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition-all"
              >
                <td className="py-5">
                  Cluster {cluster.cluster}
                </td>

                <td className="py-5 font-semibold">
                  {cluster.label}
                </td>

                <td className="py-5">
                  {cluster.flow_count}
                </td>

                <td className="py-5">
                  <span
                    className={`px-3 py-1 rounded-full border text-sm font-semibold ${getRiskColor(
                      cluster.flow_count
                    )}`}
                  >
                    {getRiskLevel(cluster.flow_count)}
                  </span>
                </td>

                <td className="py-5 text-slate-300">
                  {getMitigationStatus(cluster.label)}
                </td>

                <td className="py-5">
                  {cluster.distance}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ================= DETAIL CARD =================

function DetailCard({ label, value }) {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
      <p className="text-slate-400 text-sm">
        {label}
      </p>

      <h3 className="text-xl font-bold mt-3">
        {value}
      </h3>
    </div>
  );
}

export default Summary;