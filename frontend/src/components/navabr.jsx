// import { useState, useRef, useEffect } from "react";
// import {
//   Folder,
//   Pencil,
//   User,
//   HelpCircle,
//   ChevronDown,
//   Shield,
//   Upload,
//   FileText,
//   Settings,
//   LogOut,
//   Save,
//   Play,
//   Square,
//   Download,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";



// export default function Navbar() {
//   const [menuType, setMenuType] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuRef = useRef(null);

//   const navigate = useNavigate();

//   const handleMenuClick = (type) => {
//     if (menuType === type && menuOpen) {
//       setMenuOpen(false);
//       setMenuType(null);
//     } else {
//       setMenuType(type);
//       setMenuOpen(true);
//     }
//   };

//   // ================= CLOSE ON OUTSIDE CLICK =================

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(e.target)
//       ) {
//         setMenuOpen(false);
//         setMenuType(null);
//       }
//     };

//     document.addEventListener(
//       "mousedown",
//       handleClickOutside
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//     };
//   }, []);

// const handleItemClick = (item) => {
//     if (item.path)
//       navigate(item.path);

//     if (item.action) {
//       item.action();
//     }


//     // Close dropdown
//     setMenuOpen(false);
//     setMenuType(null);
//   };
//   // ================= MENU DATA =================

//   const exitFunction = () =>{
//     console.log('exit');
//   }

//   const startFunction = () =>{
//     console.log('start');
//   }

//   const stopFunction = () => {
//     console.log('stop');
//   }

//   const saveFunction = () => {
//     console.log('save');
//   }

//   const exportFunction = () =>{
//     console.log('export');
//   }

//   const logoutFunction = () =>{
//     console.log('logout');
//   }

//   const menuItems = {
//     File: {
//       icon: <Folder size={16} />,
//       items: [
//         {
//           label: "Previous Scans",
//           path:'/previous',
//           icon: <FileText size={15} />,
//         },
//         {
//           label: "Upload File",
//           path:'/upload-logs',
//           icon: <Upload size={15} />,
//         },
//         {
//           label: "View Logs",
//           path:'/',
//           icon: <Shield size={15} />,
//         },
//         {
//           label: "Exit",
//           action:exitFunction,
//           icon: <LogOut size={15} />,
//         },
//       ],
//     },

//     Edit: {
//       icon: <Pencil size={16} />,
//       items: [
//         {
//           label: "Start",
//           action:startFunction,
//           icon: <Play size={15} />,
//         },
//         {
//           label: "Stop",
//           action:stopFunction,
//           icon: <Square size={15} />,
//         },
//         {
//           label: "Save",
//           action:saveFunction,
//           icon: <Save size={15} />,
//         },
//         {
//           label: "Export",
//           action: exportFunction,
//           icon: <Download size={15} />,
//         },
//       ],
//     },

//     Profile: {
//       icon: <User size={16} />,
//       items: [
//         {
//           label: "View Profile",
//           path:'/',
//           icon: <User size={15} />,
//         },
//         {
//           label: "Settings",
//           path:'/',
//           icon: <Settings size={15} />,
//         },
//         {
//           label: "Logout",
//           action: logoutFunction,
//           icon: <LogOut size={15} />,
//         },
//       ],
//     },

//     Help: {
//       icon: <HelpCircle size={16} />,
//       items: [
//         {
//           label: "Documentation",
//           path:'/',
//           icon: <FileText size={15} />,
//         },
//         {
//           label: "Support",
//           path:'/',
//           icon: <HelpCircle size={15} />,
//         },
//         {
//           label: "About",
//           path:'/',
//           icon: <Shield size={15} />,
//         },
//       ],
//     },
//   };

//   return (
//     <nav
//       ref={menuRef}
//       className="w-full bg-[#0f172a] border-b border-slate-800 shadow-2xl px-6 py-3 flex items-center justify-between relative z-50 "
//     >
     

//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
//           {/* <Shield className="text-cyan-400" size={20} /> */}
//           <Shield className="text-cyan-400" size={20} />
//         </div>

//         <div>
//           <h1 className="text-white font-bold text-lg tracking-wide">
//             AutoForenX
//           </h1>

//           <p className="text-slate-400 text-xs">
//             Threat Intelligence Dashboard
//           </p>
//         </div>
//       </div>


//       <ul className="flex items-center gap-8">
//         {Object.keys(menuItems).map((menu) => (
//           <li key={menu} className="relative">
//             {/* Menu Button */}

//             <button
//               onClick={() => handleMenuClick(menu)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 border text-sm font-medium
              
//               ${
//                 menuOpen && menuType === menu
//                   ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
//                   : "border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
//               }`}
//             >
//               {menuItems[menu].icon}

//               <span>{menu}</span>

//               <ChevronDown
//                 size={15}
//                 className={`transition-transform duration-300 ${
//                   menuOpen && menuType === menu
//                     ? "rotate-180"
//                     : ""
//                 }`}
//               />
//             </button>

           

//             {menuOpen && menuType === menu && (
//               <div className="absolute left-0 top-14 w-64 bg-[#111827] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            

//                 <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
//                 <div className="p-2">
//                   {menuItems[menu].items.map(
//                     (item, index) => (
//                       <button
//                         key={index}
//                         onClick={handleItemClick(item)}
//                         className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200 group"
//                       >
//                         <div className="text-cyan-400 group-hover:scale-110 transition-transform">
//                           {item.icon}
//                         </div>

//                         <span className="text-sm font-medium">
//                           {item.label}
//                         </span>
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="hidden lg:flex items-center gap-3">
//         <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl">
//           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

//           <span className="text-sm font-medium">
//             System Active
//           </span>
//         </div>

//         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg">
//           A
//         </div>
//       </div>
//     </nav>
//   );
// }




import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Folder,
  Pencil,
  User,
  HelpCircle,
  ChevronDown,
  Shield,
  Upload,
  FileText,
  Settings,
  LogOut,
  Save,
  Play,
  Square,
  Download,
} from "lucide-react";

export default function Navbar() {
  const [menuType, setMenuType] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const navigate = useNavigate();

  // ================= FUNCTIONS =================

  const startFunction = () => {
    console.log("STARTED");
  };

  const stopFunction = () => {
    console.log("STOPPED");
  };

  const saveFunction = () => {
    console.log("SAVED");
  };

  const exportFunction = () => {
    console.log("EXPORTED");
  };

  // ================= MENU CLICK =================

  const handleMenuClick = (type) => {
    if (menuType === type && menuOpen) {
      setMenuOpen(false);
      setMenuType(null);
    } else {
      setMenuType(type);
      setMenuOpen(true);
    }
  };

  // ================= ITEM CLICK =================

  const handleItemClick = (item) => {
    // Navigate if path exists
    if (item.path) {
      navigate(item.path);
    }

    // Trigger function if action exists
    if (item.action) {
      item.action();
    }

    // Close dropdown
    setMenuOpen(false);
    setMenuType(null);
  };

  // ================= CLOSE ON OUTSIDE CLICK =================

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setMenuType(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  // ================= MENU DATA =================

  const menuItems = {
    File: {
      icon: <Folder size={16} />,
      items: [
        {
          label: "Previous Scans",
          path: "/previous",
          icon: <FileText size={15} />,
        },
        {
          label: "Upload File",
          path: "/upload-logs",
          icon: <Upload size={15} />,
        },
        {
          label: "View Logs",
          path: "/view-logs",
          icon: <Shield size={15} />,
        },
        {
          label: "Exit",
          icon: <LogOut size={15} />,
        },
      ],
    },

    Edit: {
      icon: <Pencil size={16} />,
      items: [
        {
          label: "Start",
          action: startFunction,
          icon: <Play size={15} />,
        },
        {
          label: "Stop",
          action: stopFunction,
          icon: <Square size={15} />,
        },
        {
          label: "Save",
          action: saveFunction,
          icon: <Save size={15} />,
        },
        {
          label: "Export",
          action: exportFunction,
          icon: <Download size={15} />,
        },
      ],
    },

    Profile: {
      icon: <User size={16} />,
      items: [
        {
          label: "View Profile",
          path: "/profile",
          icon: <User size={15} />,
        },
        {
          label: "Settings",
          path: "/settings",
          icon: <Settings size={15} />,
        },
        {
          label: "Logout",
          icon: <LogOut size={15} />,
        },
      ],
    },

    Help: {
      icon: <HelpCircle size={16} />,
      items: [
        {
          label: "Documentation",
          path: "/docs",
          icon: <FileText size={15} />,
        },
        {
          label: "Support",
          path: "/support",
          icon: <HelpCircle size={15} />,
        },
        {
          label: "About",
          path: "/about",
          icon: <Shield size={15} />,
        },
      ],
    },
  };

  return (
    <nav
      ref={menuRef}
      className="w-full bg-[#0f172a] border-b border-slate-800 shadow-2xl px-6 py-3 flex items-center justify-between relative z-50"
    >

<div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
           {/* <Shield className="text-cyan-400" size={20} /> */}
           <Shield className="text-cyan-400" size={20} />
         </div>

         <div>
           <h1 className="text-white font-bold text-lg tracking-wide">
             AutoForenX
           </h1>

           <p className="text-slate-400 text-xs">
             Threat Intelligence Dashboard
           </p>
         </div>
       </div>

      <ul className="flex items-center gap-8">
        {Object.keys(menuItems).map((menu) => (
          <li key={menu} className="relative">
            <button
              onClick={() => handleMenuClick(menu)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 border text-sm font-medium
              ${
                menuOpen && menuType === menu
                  ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
                  : "border-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {menuItems[menu].icon}

              <span>{menu}</span>

              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  menuOpen && menuType === menu
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {menuOpen && menuType === menu && (
              <div className="absolute left-0 top-14 w-64 bg-[#111827] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-2">
                  {menuItems[menu].items.map(
                    (item, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleItemClick(item)
                        }
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-200 group"
                      >
                        <div className="text-cyan-400">
                          {item.icon}
                        </div>

                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center gap-3">
         <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl">
           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

           <span className="text-sm font-medium">
             System Active
           </span>
         </div>

         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg">
           A
         </div>
       </div>
    </nav>
  );
}