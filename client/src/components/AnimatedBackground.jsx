import { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  // Smooth mouse target (0–1 normalized, 0.5 = center)
  const mouse = useRef({ x: 0.5, y: 0.5 });
  // Current interpolated values for smooth easing
  const current = useRef({ x: 0.5, y: 0.5 });
  const scrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    const onMouseMove = (e) => {
      mouse.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const applyTransforms = () => {
      // Lerp toward mouse target for silky smoothness
      current.current.x += (mouse.current.x - current.current.x) * 0.06;
      current.current.y += (mouse.current.y - current.current.y) * 0.06;

      // Offset from center: -1 → +1
      const dx = (current.current.x - 0.5) * 2;
      const dy = (current.current.y - 0.5) * 2;
      const sy = scrollY.current;

      // Layer 1 — slowest parallax, strongest mouse pull
      if (layer1Ref.current)
        layer1Ref.current.style.transform = `translate(${dx * -22}px, ${dy * -16}px) translateY(${sy * 0.12}px)`;
      // Layer 2 — medium
      if (layer2Ref.current)
        layer2Ref.current.style.transform = `translate(${dx * -14}px, ${dy * -10}px) translateY(${sy * 0.06}px)`;
      // Layer 3 — fastest, subtlest mouse offset
      if (layer3Ref.current)
        layer3Ref.current.style.transform = `translate(${dx * -6}px, ${dy * -5}px) translateY(${sy * 0.02}px)`;

      rafId.current = requestAnimationFrame(applyTransforms);
    };

    rafId.current = requestAnimationFrame(applyTransforms);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="animated-bg">
      <svg
        className="bg-svg"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="bg-glow-blur"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* ─── Layer 1: Ambient glows + large rotating hexagons (slowest) ─── */}
        <g ref={layer1Ref} className="bg-layer">
          {/* Ambient glow blobs */}
          <circle
            cx="200"
            cy="320"
            r="220"
            fill="rgba(139,92,246,0.28)"
            filter="url(#bg-glow-blur)"
            className="glow-breathe"
          />
          <circle
            cx="1240"
            cy="480"
            r="260"
            fill="rgba(6,182,212,0.22)"
            filter="url(#bg-glow-blur)"
            className="glow-breathe-2"
          />
          <circle
            cx="720"
            cy="750"
            r="200"
            fill="rgba(139,92,246,0.20)"
            filter="url(#bg-glow-blur)"
            className="glow-breathe-slow"
          />

          {/* Large wireframe hexagons */}
          <polygon
            className="hex-spin"
            points="720,100 780.6,135 780.6,205 720,240 659.4,205 659.4,135"
            fill="none"
            stroke="rgba(139,92,246,0.72)"
            strokeWidth="2"
          />
          <polygon
            className="hex-spin-rev"
            points="100,595 165,632.5 165,707.5 100,745 35,707.5 35,632.5"
            fill="none"
            stroke="rgba(139,92,246,0.62)"
            strokeWidth="2"
          />
          <polygon
            className="hex-spin-slow"
            points="1350,198 1412,234 1412,306 1350,342 1288,306 1288,234"
            fill="none"
            stroke="rgba(6,182,212,0.68)"
            strokeWidth="2"
          />
        </g>

        {/* ─── Layer 2: Constellation network (medium parallax) ─── */}
        <g ref={layer2Ref} className="bg-layer">
          {/* Connection lines */}
          <line
            x1="150"
            y1="120"
            x2="380"
            y2="80"
            stroke="rgba(139,92,246,0.65)"
            strokeWidth="1"
            className="conn-1"
          />
          <line
            x1="380"
            y1="80"
            x2="600"
            y2="200"
            stroke="rgba(139,92,246,0.65)"
            strokeWidth="1"
            className="conn-2"
          />
          <line
            x1="600"
            y1="200"
            x2="850"
            y2="100"
            stroke="rgba(139,92,246,0.65)"
            strokeWidth="1"
            className="conn-3"
          />
          <line
            x1="850"
            y1="100"
            x2="1100"
            y2="180"
            stroke="rgba(139,92,246,0.58)"
            strokeWidth="1"
            className="conn-1"
          />
          <line
            x1="1100"
            y1="180"
            x2="1200"
            y2="350"
            stroke="rgba(139,92,246,0.52)"
            strokeWidth="1"
            className="conn-2"
          />
          <line
            x1="150"
            y1="120"
            x2="200"
            y2="350"
            stroke="rgba(139,92,246,0.45)"
            strokeWidth="1"
            className="conn-3"
          />
          <line
            x1="600"
            y1="200"
            x2="700"
            y2="380"
            stroke="rgba(6,182,212,0.58)"
            strokeWidth="1"
            className="conn-1"
          />
          <line
            x1="850"
            y1="100"
            x2="950"
            y2="300"
            stroke="rgba(6,182,212,0.58)"
            strokeWidth="1"
            className="conn-2"
          />
          <line
            x1="200"
            y1="350"
            x2="450"
            y2="420"
            stroke="rgba(6,182,212,0.65)"
            strokeWidth="1"
            className="conn-3"
          />
          <line
            x1="450"
            y1="420"
            x2="700"
            y2="380"
            stroke="rgba(6,182,212,0.65)"
            strokeWidth="1"
            className="conn-1"
          />
          <line
            x1="700"
            y1="380"
            x2="950"
            y2="300"
            stroke="rgba(6,182,212,0.65)"
            strokeWidth="1"
            className="conn-2"
          />
          <line
            x1="950"
            y1="300"
            x2="1200"
            y2="350"
            stroke="rgba(6,182,212,0.58)"
            strokeWidth="1"
            className="conn-3"
          />
          <line
            x1="350"
            y1="650"
            x2="650"
            y2="580"
            stroke="rgba(139,92,246,0.45)"
            strokeWidth="1"
            className="conn-1"
          />
          <line
            x1="650"
            y1="580"
            x2="900"
            y2="620"
            stroke="rgba(139,92,246,0.45)"
            strokeWidth="1"
            className="conn-2"
          />
          <line
            x1="900"
            y1="620"
            x2="1150"
            y2="580"
            stroke="rgba(6,182,212,0.45)"
            strokeWidth="1"
            className="conn-3"
          />

          {/* Network nodes — dot + glow halo */}
          <g className="float-f1">
            <circle cx="150" cy="120" r="16" fill="rgba(139,92,246,0.30)" />
            <circle cx="150" cy="120" r="4" fill="rgba(139,92,246,1.0)" />
          </g>
          <g className="float-f2">
            <circle cx="380" cy="80" r="13" fill="rgba(139,92,246,0.26)" />
            <circle cx="380" cy="80" r="3" fill="rgba(139,92,246,0.95)" />
          </g>
          <g className="float-f3">
            <circle cx="600" cy="200" r="20" fill="rgba(139,92,246,0.32)" />
            <circle cx="600" cy="200" r="5" fill="rgba(139,92,246,1.0)" />
          </g>
          <g className="float-f4">
            <circle cx="850" cy="100" r="15" fill="rgba(6,182,212,0.28)" />
            <circle cx="850" cy="100" r="3.5" fill="rgba(6,182,212,1.0)" />
          </g>
          <g className="float-f5">
            <circle cx="1100" cy="180" r="16" fill="rgba(139,92,246,0.26)" />
            <circle cx="1100" cy="180" r="4" fill="rgba(139,92,246,0.95)" />
          </g>
          <g className="float-f6">
            <circle cx="200" cy="350" r="13" fill="rgba(6,182,212,0.26)" />
            <circle cx="200" cy="350" r="3" fill="rgba(6,182,212,0.95)" />
          </g>
          <g className="float-f7">
            <circle cx="450" cy="420" r="18" fill="rgba(139,92,246,0.32)" />
            <circle cx="450" cy="420" r="4.5" fill="rgba(139,92,246,1.0)" />
          </g>
          <g className="float-f8">
            <circle cx="700" cy="380" r="13" fill="rgba(6,182,212,0.26)" />
            <circle cx="700" cy="380" r="3" fill="rgba(6,182,212,1.0)" />
          </g>
          <g className="float-f1">
            <circle cx="950" cy="300" r="16" fill="rgba(139,92,246,0.26)" />
            <circle cx="950" cy="300" r="4" fill="rgba(139,92,246,0.95)" />
          </g>
          <g className="float-f2">
            <circle cx="1200" cy="350" r="14" fill="rgba(6,182,212,0.26)" />
            <circle cx="1200" cy="350" r="3.5" fill="rgba(6,182,212,0.92)" />
          </g>
          <g className="float-f3">
            <circle cx="350" cy="650" r="15" fill="rgba(139,92,246,0.26)" />
            <circle cx="350" cy="650" r="4" fill="rgba(139,92,246,0.92)" />
          </g>
          <g className="float-f5">
            <circle cx="650" cy="580" r="14" fill="rgba(6,182,212,0.26)" />
            <circle cx="650" cy="580" r="3.5" fill="rgba(6,182,212,0.92)" />
          </g>
          <g className="float-f6">
            <circle cx="900" cy="620" r="15" fill="rgba(139,92,246,0.26)" />
            <circle cx="900" cy="620" r="4" fill="rgba(139,92,246,0.92)" />
          </g>
          <g className="float-f7">
            <circle cx="1150" cy="580" r="13" fill="rgba(6,182,212,0.24)" />
            <circle cx="1150" cy="580" r="3" fill="rgba(6,182,212,0.88)" />
          </g>

          {/* Medium wireframe hexagons */}
          <polygon
            className="hex-spin"
            points="400,275 447.6,302 447.6,358 400,385 352.4,358 352.4,302"
            fill="none"
            stroke="rgba(139,92,246,0.62)"
            strokeWidth="1.5"
          />
          <polygon
            className="hex-spin-rev"
            points="1060,430 1103,455 1103,505 1060,530 1017,505 1017,455"
            fill="none"
            stroke="rgba(6,182,212,0.62)"
            strokeWidth="1.5"
          />
        </g>

        {/* ─── Layer 3: Small particles + code symbols (fastest) ─── */}
        <g ref={layer3Ref} className="bg-layer">
          {/* Small floating dots */}
          <circle
            cx="80"
            cy="200"
            r="2.5"
            fill="rgba(139,92,246,0.88)"
            className="float-f4"
          />
          <circle
            cx="1360"
            cy="150"
            r="2.5"
            fill="rgba(6,182,212,0.85)"
            className="float-f2"
          />
          <circle
            cx="500"
            cy="310"
            r="2"
            fill="rgba(139,92,246,0.85)"
            className="float-f6"
          />
          <circle
            cx="1250"
            cy="610"
            r="2.5"
            fill="rgba(139,92,246,0.78)"
            className="float-f3"
          />
          <circle
            cx="750"
            cy="730"
            r="2.5"
            fill="rgba(6,182,212,0.78)"
            className="float-f5"
          />
          <circle
            cx="250"
            cy="510"
            r="2"
            fill="rgba(139,92,246,0.75)"
            className="float-f7"
          />
          <circle
            cx="1100"
            cy="700"
            r="2.5"
            fill="rgba(6,182,212,0.85)"
            className="float-f1"
          />
          <circle
            cx="50"
            cy="450"
            r="2"
            fill="rgba(139,92,246,0.72)"
            className="float-f8"
          />
          <circle
            cx="1400"
            cy="410"
            r="2.5"
            fill="rgba(6,182,212,0.78)"
            className="float-f4"
          />
          <circle
            cx="900"
            cy="810"
            r="2"
            fill="rgba(139,92,246,0.72)"
            className="float-f2"
          />
          <circle
            cx="1310"
            cy="790"
            r="2.5"
            fill="rgba(6,182,212,0.72)"
            className="float-f6"
          />
          <circle
            cx="450"
            cy="155"
            r="2"
            fill="rgba(139,92,246,0.85)"
            className="float-f3"
          />
          <circle
            cx="1050"
            cy="60"
            r="2"
            fill="rgba(6,182,212,0.78)"
            className="float-f5"
          />
          <circle
            cx="300"
            cy="840"
            r="2.5"
            fill="rgba(139,92,246,0.72)"
            className="float-f7"
          />

          {/* Floating code symbols */}
          <text
            x="490"
            y="152"
            fill="rgba(139,92,246,0.62)"
            fontSize="26"
            fontFamily="monospace"
            fontWeight="bold"
            className="float-f1"
          >
            {"</>"}{" "}
          </text>
          <text
            x="990"
            y="522"
            fill="rgba(6,182,212,0.55)"
            fontSize="24"
            fontFamily="monospace"
            fontWeight="bold"
            className="float-f2"
          >
            {"{ }"}
          </text>
          <text
            x="120"
            y="698"
            fill="rgba(139,92,246,0.55)"
            fontSize="22"
            fontFamily="monospace"
            fontWeight="bold"
            className="float-f3"
          >
            {"[ ]"}
          </text>
          <text
            x="1195"
            y="122"
            fill="rgba(6,182,212,0.52)"
            fontSize="20"
            fontFamily="monospace"
            className="float-f4"
          >
            {"=>"}
          </text>
          <text
            x="840"
            y="760"
            fill="rgba(6,182,212,0.50)"
            fontSize="20"
            fontFamily="monospace"
            fontWeight="bold"
            className="float-f5"
          >
            {"</>"}{" "}
          </text>
          <text
            x="290"
            y="200"
            fill="rgba(139,92,246,0.48)"
            fontSize="18"
            fontFamily="monospace"
            className="float-f6"
          >
            {"01"}
          </text>
          <text
            x="1050"
            y="115"
            fill="rgba(139,92,246,0.48)"
            fontSize="16"
            fontFamily="monospace"
            className="float-f7"
          >
            {"()"}
          </text>
          <text
            x="620"
            y="820"
            fill="rgba(6,182,212,0.45)"
            fontSize="18"
            fontFamily="monospace"
            className="float-f8"
          >
            {"fn"}
          </text>

          {/* Tiny diamond / rhombus shapes */}
          <polygon
            className="float-f4"
            points="1380,500 1402,530 1380,560 1358,530"
            fill="none"
            stroke="rgba(139,92,246,0.70)"
            strokeWidth="1.5"
          />
          <polygon
            className="float-f7"
            points="80,752 102,778 80,804 58,778"
            fill="none"
            stroke="rgba(6,182,212,0.70)"
            strokeWidth="1.5"
          />
          <polygon
            className="float-f2"
            points="700,48 716,72 700,96 684,72"
            fill="none"
            stroke="rgba(139,92,246,0.70)"
            strokeWidth="1.5"
          />
          <polygon
            className="float-f5"
            points="1330,660 1348,680 1330,700 1312,680"
            fill="none"
            stroke="rgba(6,182,212,0.65)"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}
