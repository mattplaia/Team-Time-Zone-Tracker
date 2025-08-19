// Creative, Content & Digital TEAM SETUP
setupTeamTimeline({
  prefix: "creative",
  team: [
    { name: "Nico", tz: "Asia/Manila", class: "nico" },
    { name: "Fede", tz: "America/Argentina/Buenos_Aires", class: "fede" },
    { name: "Pablo", tz: "America/Argentina/Buenos_Aires", class: "pablo" },
    { name: "Sara", tz: "America/New_York", class: "sara" },
    { name: "Maddi", tz: "America/Chicago", class: "maddi" },
    { name: "Lizzy", tz: "America/Denver", class: "lizzy" },
    { name: "Becky", tz: "America/Mexico_City", class: "becky" },
    { name: "Alex S.", tz: "America/Los_Angeles", class: "alex_s" },
    { name: "Carolyn", tz: "America/Los_Angeles", class: "carolyn" },
    { name: "Matt", tz: "America/Los_Angeles", class: "matt" },
    { name: "Shane", tz: "America/Los_Angeles", class: "shane" },
    { name: "Meghan T.", tz: "Pacific/Honolulu", class: "meghan_t" },
  ],
});

// Marketing Account Managers TEAM SETUP
setupTeamTimeline({
  prefix: "managers",
  team: [
    { name: "Alex G.", tz: "America/New_York", class: "alex_g" },
    { name: "Katie", tz: "America/New_York", class: "katie" },
    { name: "Meghan M.", tz: "America/New_York", class: "meghan_m" },
    { name: "Michael", tz: "America/New_York", class: "michael" },
    { name: "Rebecca", tz: "America/New_York", class: "rebecca" },
    { name: "Kelly", tz: "America/Chicago", class: "kelly" },
    { name: "Erin", tz: "America/Phoenix", class: "erin" },
    { name: "Kerry", tz: "America/Los_Angeles", class: "kerry" },
    { name: "Daniel", tz: "America/Los_Angeles", class: "daniel" },
    { name: "Laura R.", tz: "America/Los_Angeles", class: "laura_r" },
    { name: "Monique", tz: "America/Los_Angeles", class: "monique" },
    { name: "Nicholle", tz: "America/Los_Angeles", class: "nicholle" },
    { name: "Rylan", tz: "America/Los_Angeles", class: "rylan" },
    { name: "Sam", tz: "America/Los_Angeles", class: "sam" },
    { name: "Sela", tz: "America/Los_Angeles", class: "sela" },
    { name: "Trishna", tz: "America/Los_Angeles", class: "trishna" },
  ],
});

// Marketing Ops & Mgmt. Services TEAM SETUP
setupTeamTimeline({
  prefix: "ops",
  team: [
    { name: "Lesley", tz: "America/New_York", class: "lesley" },
    { name: "Nathan", tz: "America/New_York", class: "nathan" },
    { name: "Zoe", tz: "America/New_York", class: "zoe" },
    { name: "Molly", tz: "America/Chicago", class: "molly" },
    { name: "Makenzie", tz: "America/Denver", class: "makenzie" },
    { name: "Cassie", tz: "America/Los_Angeles", class: "cassie" },
    { name: "Zach", tz: "America/Los_Angeles", class: "zach" },
  ],
});

// Public Relations TEAM SETUP
setupTeamTimeline({
  prefix: "pr",
  team: [
    { name: "Andrea", tz: "America/New_York", class: "andrea" },
    { name: "Fernanda", tz: "America/Los_Angeles", class: "fernanda" },
    { name: "Isabel", tz: "America/New_York", class: "isabel" },
    { name: "Laura C.", tz: "America/New_York", class: "laura_c" },
  ],
});

// GLOBAL TOP CLOCK UPDATER
function updateTopClock() {
  const topClock = document.getElementById("local-time");
  if (topClock) {
    topClock.textContent = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }
}
setInterval(updateTopClock, 1000);

function updateTopDate() {
  const dateEl = document.getElementById("current-date");
  if (dateEl) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    dateEl.textContent = formattedDate;
  }
}
setInterval(updateTopDate, 1000);
updateTopDate();

function getViewerRegion() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (tz.includes("Argentina")) return "ART";
  if (tz.includes("New_York") || tz.includes("Detroit")) return "EDT";
  if (tz.includes("Chicago")) return "CDT";
  if (tz.includes("Denver")) return "MDT";
  if (tz.includes("Phoenix")) return "MST";
  if (tz.includes("Los_Angeles") || tz.includes("Vancouver")) return "PDT";
  if (tz.includes("Mexico_City")) return "CST";
  if (tz.includes("Honolulu")) return "HST";

  return "PDT"; // fallback to PDT if not matched
}

// SETUP TEAM TIMELINE
function setupTeamTimeline({ prefix, team }) {
  const timelineEl = document.getElementById(`${prefix}-timeline`);
  const markersEl = document.getElementById(`${prefix}-markers`);
  const localTimeEl = document.getElementById(
    prefix === "creative" ? "local-time" : "local-time-ops"
  );
  const legendEl = document.getElementById(`${prefix}-legend`);
  const overlayEl = document.getElementById(`${prefix}-member-overlay`);

  renderTimeline();

  function getTranslatedWorkingMinutes(name) {
    const region = getViewerRegion();

    if (region === "PDT") {
      switch (name) {
        case "Nico":
          return [540, 660];
        case "Fede":
          return [330, 870];
        case "Pablo":
          return [450, 990];
        case "Sara":
          return [360, 900];
        case "Maddi":
          return [360, 900];
        case "Meghan T.":
          return [660, 1200];
        case "Lizzy":
          return [480, 1020];
        case "Becky":
          return [480, 1020];
        case "Lesley":
          return [360, 900];
        case "Nathan":
          return [360, 900];
        case "Zoe":
          return [360, 900];
        case "Makenzie":
          return [480, 1020];
        case "Alex G.":
          return [360, 900];
        case "Katie":
          return [360, 900];
        case "Meghan M.":
          return [360, 900];
        case "Michael":
          return [360, 900];
        case "Rebecca":
          return [360, 900];
        case "Molly":
          return [420, 960];
        case "Kelly":
          return [420, 960];
        case "Erin":
          return [420, 960];
        case "Andrea":
          return [360, 900];
        case "Isabel":
          return [360, 900];
        case "Laura C.":
          return [360, 900];
        default:
          return [540, 1080];
      }
    } else if (region === "EDT") {
      switch (name) {
        case "Nico":
          return [720, 840];
        case "Alex S.":
          return [720, 1260];
        case "Carolyn":
          return [720, 1260];
        case "Matt":
          return [720, 1260];
        case "Shane":
          return [720, 1260];
        case "Kerry":
          return [720, 1260];
        case "Daniel":
          return [720, 1260];
        case "Laura R.":
          return [720, 1260];
        case "Monique":
          return [720, 1260];
        case "Nicholle":
          return [720, 1260];
        case "Rylan":
          return [720, 1260];
        case "Sam":
          return [720, 1260];
        case "Sela":
          return [720, 1260];
        case "Trishna":
          return [720, 1260];
        case "Cassie":
          return [720, 1260];
        case "Zach":
          return [720, 1260];
        case "Fernanda":
          return [720, 1260];
        case "Fede":
          return [510, 1050];
        case "Pablo":
          return [630, 1170];
        case "Molly":
          return [600, 1140];
        case "Kelly":
          return [600, 1140];
        case "Lizzy":
          return [660, 1200];
        case "Meghan T.":
          return [840, 1380];
        case "Erin":
          return [600, 1140];
        default:
          return [540, 1080];
      }
    } else if (region === "CDT") {
      switch (name) {
        case "Nico":
          return [660, 780];
        case "Fede":
          return [390, 930];
        case "Pablo":
          return [510, 1050];
        case "Sara":
          return [480, 1020];
        case "Meghan T.":
          return [840, 1380];
        case "Lizzy":
          return [540, 1080];
        case "Becky":
          return [540, 1080];
        case "Lesley":
          return [480, 1020];
        case "Nathan":
          return [480, 1020];
        case "Zoe":
          return [480, 1020];
        case "Makenzie":
          return [600, 1140];
        case "Alex G.":
          return [480, 1020];
        case "Katie":
          return [480, 1020];
        case "Meghan M.":
          return [480, 1020];
        case "Michael":
          return [480, 1020];
        case "Rebecca":
          return [480, 1020];
        case "Erin":
          return [540, 1080];
        case "Andrea":
          return [480, 1020];
        case "Isabel":
          return [480, 1020];
        case "Laura C.":
          return [480, 1020];
        default:
          return [540, 1080];
      }
    } else if (region === "MDT") {
      switch (name) {
        case "Nico":
          return [600, 720];
        case "Fede":
          return [330, 870];
        case "Pablo":
          return [450, 990];
        case "Sara":
          return [420, 960];
        case "Maddi":
          return [420, 960];
        case "Meghan T.":
          return [720, 1260];
        case "Becky":
          return [540, 1080];
        case "Lesley":
          return [420, 960];
        case "Nathan":
          return [420, 960];
        case "Zoe":
          return [420, 960];
        case "Alex G.":
          return [420, 960];
        case "Katie":
          return [420, 960];
        case "Meghan M.":
          return [420, 960];
        case "Michael":
          return [420, 960];
        case "Rebecca":
          return [420, 960];
        case "Molly":
          return [480, 1020];
        case "Kelly":
          return [480, 1020];
        case "Erin":
          return [480, 1020];
        case "Andrea":
          return [420, 960];
        case "Isabel":
          return [420, 960];
        case "Laura C.":
          return [420, 960];
        default:
          return [540, 1080];
      }
    } else if (region === "CST") {
      switch (name) {
        case "Nico":
          return [600, 720];
        case "Fede":
          return [330, 870];
        case "Pablo":
          return [450, 990];
        case "Sara":
          return [420, 960];
        case "Maddi":
          return [420, 960];
        case "Meghan T.":
          return [720, 1260];
        case "Becky":
          return [540, 1080];
        case "Lesley":
          return [420, 960];
        case "Nathan":
          return [420, 960];
        case "Zoe":
          return [420, 960];
        case "Alex G.":
          return [420, 960];
        case "Katie":
          return [420, 960];
        case "Meghan M.":
          return [420, 960];
        case "Michael":
          return [420, 960];
        case "Rebecca":
          return [420, 960];
        case "Molly":
          return [480, 1020];
        case "Kelly":
          return [480, 1020];
        case "Erin":
          return [480, 1020];
        case "Andrea":
          return [420, 960];
        case "Isabel":
          return [420, 960];
        case "Laura C.":
          return [420, 960];
        default:
          return [540, 1080];
      }
    } else if (region === "HST") {
      switch (name) {
        case "Nico":
          return [360, 480];
        case "Fede":
          return [570, 1110];
        case "Pablo":
          return [690, 1230];
        case "Sara":
          return [180, 720];
        case "Maddi":
          return [240, 780];
        case "Lizzy":
          return [360, 900];
        case "Becky":
          return [360, 900];
        case "Lesley":
          return [180, 720];
        case "Nathan":
          return [180, 720];
        case "Zoe":
          return [180, 720];
        case "Makenzie":
          return [360, 900];
        case "Alex G.":
          return [180, 720];
        case "Katie":
          return [180, 720];
        case "Meghan M.":
          return [180, 720];
        case "Michael":
          return [180, 720];
        case "Rebecca":
          return [180, 720];
        case "Molly":
          return [300, 840];
        case "Kelly":
          return [300, 840];
        case "Erin":
          return [420, 960];
        case "Andrea":
          return [180, 720];
        case "Isabel":
          return [180, 720];
        case "Laura C.":
          return [180, 720];
        default:
          return [540, 1080];
      }
    }

    return [540, 1080];
  }

  function showCustomHours(member) {
    overlayEl.innerHTML = "";
    const [start, end] = getTranslatedWorkingMinutes(member.name);
    const startPct = (start / 1440) * 100;
    const widthPct = ((end - start) / 1440) * 100;
    const overlay = document.createElement("div");
    overlay.style.cssText = `position:absolute;top:0;left:${startPct}%;width:${widthPct}%;height:100%;background:${getPaleColor(
      member.class
    )};z-index:1;`;
    overlayEl.appendChild(overlay);
  }

  function getPaleColor(cls) {
    const colors = {
      nico: "#558B2F20",
      fede: "#D500F920",
      pablo: "#6D4C4120",
      alex_s: "#BF360C20",
      sara: "#ff174420",
      maddi: "#fdd83520",
      lizzy: "#00e67620",
      matt: "#ff69b420",
      becky: "#ab47bc20",
      carolyn: "#ff980020",
      meghan_t: "#4db6ac20",
      shane: "#2979ff20",
      molly: "#FFEB3B20",
      lesley: "#00968820",
      makenzie: "#FF2D5520",
      nathan: "#3949AB20",
      cassie: "#9575CD20",
      zach: "#00B8D420",
      zoe: "#FF6F0020",
      alex_g: "#8E24AA20",
      katie: "#F4433620",
      meghan_m: "#5C6BC020",
      michael: "#039BE520",
      rebecca: "#00ACC120",
      kelly: "#558B2F20",
      erin: "#B2FF5920",
      kerry: "#FFD54F20",
      daniel: "#FF704320",
      laura_r: "#BF360C20",
      monique: "#6D4C4120",
      nicholle: "#7C4DFF20",
      rylan: "#D4E15720",
      sam: "#D500F920",
      sela: "#FF408120",
      trishna: "#F9A82520",
      andrea: "#ff174420",
      isabel: "#fdd83520",
      fernanda: "#00e67620",
      laura_c: "#ff69b420",
    };
    return colors[cls] || "#cccccc20";
  }

  function renderTimeline() {
    timelineEl.innerHTML = "";
    for (let hour = 0; hour < 24; hour++) {
      const label = new Date(Date.UTC(2000, 0, 1, hour)).toLocaleTimeString(
        "en-US",
        { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "UTC" }
      );
      const div = document.createElement("div");
      div.textContent = label;
      timelineEl.appendChild(div);
    }
  }

function isWorkingHour(member) {
  const now = new Date();
  const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const mappedTime = new Date(
    now.toLocaleString("en-US", { timeZone: userTZ })
  );
  const totalMins = mappedTime.getHours() * 60 + mappedTime.getMinutes();

  const [start, end] = getTranslatedWorkingMinutes(member.name);

  return totalMins >= start && totalMins < end;
}


  function updateMarkersAndLegend() {
    const now = new Date();
    const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    markersEl.innerHTML = "";
    legendEl.innerHTML = "";
    const markersByPos = {};

    team.forEach((member) => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: member.tz,
      });
      const parts = Object.fromEntries(
        formatter.formatToParts(now).map(({ type, value }) => [type, value])
      );
      const hour = parseInt(parts.hour, 10);
      const minute = parseInt(parts.minute, 10);
      const isOnline = isWorkingHour(member);
      const displayTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: member.tz,
      }).format(now);
      const localTime = new Date(
        now.toLocaleString("en-US", { timeZone: member.tz })
      );
      const mappedTime = new Date(
        localTime.toLocaleString("en-US", { timeZone: userTZ })
      );
      const totalMins = mappedTime.getHours() * 60 + mappedTime.getMinutes();
      const percent = +((totalMins / 1440) * 100).toFixed(2);
      if (!markersByPos[percent]) markersByPos[percent] = [];
      markersByPos[percent].push({
        class: member.class,
        isOnline,
        name: member.name,
        time: displayTime,
        tz: member.tz,
      });
    });

    // Draw markers (unchanged)
    Object.entries(markersByPos).forEach(([percent, members]) => {
      members.forEach((member, i) => {
        const marker = document.createElement("div");
        marker.className = `marker ${member.class}${
          member.isOnline ? " online" : ""
        }`;
        marker.style.left = `${percent}%`;
        marker.style.height = `${100 / members.length}%`;
        marker.style.top = `${(100 / members.length) * i}%`;
        markersEl.appendChild(marker);
      });
    });

    // Draw legend in team array order, not marker position order
    team.forEach((member) => {
      const displayTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: member.tz,
      }).format(new Date());

      const legend = document.createElement("div");
      legend.className = `legend-item ${member.class}`;
      legend.textContent = `${member.name} (${getShortTZ(
        member.tz
      )}): ${displayTime}`;
      legend.onmouseenter = () => showCustomHours(member);
      legend.onmouseleave = () => (overlayEl.innerHTML = "");
      legendEl.appendChild(legend);
    });
  }

  function updateTeamClock() {
    if (localTimeEl) {
      localTimeEl.textContent = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }
  }

  function updatePin() {
    const pin = document.getElementById(`${prefix}-current-time-pin`);
    const timeline = document.getElementById(`${prefix}-timeline`);
    if (!pin || !timeline) return;

    const now = new Date();
    const totalMins = now.getHours() * 60 + now.getMinutes();
    const timelineWidth = timeline.scrollWidth; // Full scrollable width
    const position = (totalMins / 1440) * timelineWidth;

    pin.style.left = `${position}px`;
  }

  function updateEverything() {
    updateMarkersAndLegend();
    updateTeamClock();
    updatePin();
  }

  // Initial Render and Realtime Updates
  updateEverything();
  setInterval(updateEverything, 1000);
}

// Timezone Short Codes
function getShortTZ(tz) {
  switch (tz) {
    case "America/Argentina/Buenos_Aires":
      return "ART";
    case "America/New_York":
      return "EDT";
    case "America/Chicago":
      return "CDT";
    case "America/Denver":
      return "MDT";
    case "America/Los_Angeles":
      return "PDT";
    case "America/Phoenix":
      return "MST";
    case "America/Mexico_City":
      return "CST";
    case "Pacific/Honolulu":
      return "HST";
    case "Asia/Manila":
      return "PHT";
    default:
      return "";
  }
}

let earthTexture;
let globeDiameter;
let rotX = 0;
let rotY = 0;

function preload() {
  earthTexture = loadImage(
    "https://www.mattplaia.com/wp-content/uploads/2025/05/Team-Time-Zones_Globe-Texture_2.jpg"
  );
}

function setup() {
  const canvasSize = 120; // Adjust as needed
  const canvas = createCanvas(canvasSize, canvasSize, WEBGL);
  canvas.parent("globe-container");
  globeDiameter = canvasSize * 0.8;
}

function draw() {
  clear();
  noStroke();

  rotateX(rotX);
  rotateY(rotY + frameCount * 0.01);

  texture(earthTexture);
  sphere(globeDiameter / 2);
}

function windowResized() {
  const canvasSize = 120;
  resizeCanvas(canvasSize, canvasSize);
  globeDiameter = canvasSize * 0.8;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");

  // Apply saved preference on load
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  if (isDark) {
    document.body.classList.add("dark-mode");
    toggleButton.checked = true; // Ensure toggle is visually in "dark mode" position
  } else {
    document.body.classList.remove("dark-mode");
    toggleButton.checked = false; // Ensure toggle is visually in "light mode" position
  }

  // Handle toggle click
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkNow = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    toggleButton.checked = isDarkNow;
  });
});
