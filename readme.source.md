

```aura width=860 height=200 link="https://github.com/rjgrl"
<div style={{
  width: '100%', height: '100%', background: '#08080c',
  display: 'flex', alignItems: 'center', fontFamily: 'Inter',
  position: 'relative', overflow: 'hidden', borderRadius: 16,
  border: '1px solid rgba(110,80,220,0.18)'
}}>

  <style>{`
      @keyframes float-slow {
        0%, 100% { transform: translateX(0px); opacity: 0.8; }
        50% { transform: translateX(350px); opacity: 1.2; }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateX(0px); opacity: 0.7; }
        50% { transform: translateX(-250px); opacity: 1.1; }
      }
      @keyframes float-fast {
        0%, 100% { transform: translateX(0px); opacity: 0.9; }
        50% { transform: translateX(200px); opacity: 0.6; }
      }
      @keyframes float-diagonal {
        0%, 100% { transform: translateX(0px); opacity: 0.75; }
        50% { transform: translateX(300px); opacity: 1.0; }
      }
      @keyframes float-wave {
        0%, 100% { transform: translateX(0px); opacity: 0.65; }
        33% { transform: translateX(-160px); opacity: 0.9; }
        66% { transform: translateX(80px); opacity: 1.0; }
      }
      @keyframes float-pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.3); opacity: 0.4; }
      }
      #glow-1 { animation: float-slow 8s ease-in-out infinite; }
      #glow-2 { animation: float-medium 12s ease-in-out infinite; }
      #glow-3 { animation: float-fast 9s ease-in-out infinite; }
      #glow-4 { animation: float-slow 11s ease-in-out infinite reverse; }
      #glow-5 { animation: float-medium 14s ease-in-out infinite reverse; }
      #glow-6 { animation: float-diagonal 10s ease-in-out infinite; }
      #glow-7 { animation: float-wave 13s ease-in-out infinite; }
      #glow-8 { animation: float-pulse 7s ease-in-out infinite; }
    `}</style>

  <svg width="860" height="200" style={{ position: 'absolute', top: 0, left: 0 }}>
    <defs>
      <radialGradient id="g1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(110,20,210,0.72)" />
        <stop offset="40%" stopColor="rgba(90,15,180,0.35)" />
        <stop offset="70%" stopColor="rgba(90,15,180,0)" />
      </radialGradient>
      <radialGradient id="g2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(40,60,255,0.6)" />
        <stop offset="45%" stopColor="rgba(30,50,200,0.25)" />
        <stop offset="70%" stopColor="rgba(30,50,200,0)" />
      </radialGradient>
      <radialGradient id="g3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,130,255,0.45)" />
        <stop offset="50%" stopColor="rgba(0,100,220,0.18)" />
        <stop offset="70%" stopColor="rgba(0,100,220,0)" />
      </radialGradient>
      <radialGradient id="g4" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,190,230,0.32)" />
        <stop offset="70%" stopColor="rgba(0,190,230,0)" />
      </radialGradient>
      <radialGradient id="g5" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(90,30,200,0.38)" />
        <stop offset="70%" stopColor="rgba(90,30,200,0)" />
      </radialGradient>
      <radialGradient id="g6" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(160,30,255,0.55)" />
        <stop offset="45%" stopColor="rgba(130,20,220,0.22)" />
        <stop offset="70%" stopColor="rgba(130,20,220,0)" />
      </radialGradient>
      <radialGradient id="g7" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(20,60,255,0.42)" />
        <stop offset="50%" stopColor="rgba(10,40,200,0.16)" />
        <stop offset="70%" stopColor="rgba(10,40,200,0)" />
      </radialGradient>
      <radialGradient id="g8" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="rgba(0,170,255,0.40)" />
        <stop offset="50%" stopColor="rgba(0,130,220,0.15)" />
        <stop offset="70%" stopColor="rgba(0,130,220,0)" />
      </radialGradient>
    </defs>

    <ellipse id="glow-1" cx="180" cy="230" rx="260" ry="190" fill="url(#g1)" />
    <ellipse id="glow-2" cx="300" cy="240" rx="220" ry="160" fill="url(#g2)" />
    <ellipse id="glow-3" cx="420" cy="240" rx="180" ry="140" fill="url(#g3)" />
    <ellipse id="glow-4" cx="550" cy="250" rx="150" ry="120" fill="url(#g4)" />
    <ellipse id="glow-5" cx="750" cy="250" rx="130" ry="110" fill="url(#g5)" />
    <ellipse id="glow-6" cx="300" cy="240" rx="180" ry="140" fill="url(#g6)" />
    <ellipse id="glow-7" cx="490" cy="230" rx="220" ry="170" fill="url(#g7)" />
    <ellipse id="glow-8" cx="590" cy="250" rx="150" ry="130" fill="url(#g8)" />
  </svg>

  <div style={{
    position: 'absolute', left: 48, top: 52, width: 96, height: 96,
    borderRadius: 48, background: 'linear-gradient(135deg, #6622ee, #0088ff)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <img src={github?.user?.avatarUrl ?? 'https://github.com/rjgrl.png'} width={88} height={88} style={{ borderRadius: 44 }} />
  </div>

  <div style={{ display:'flex', flexDirection:'column', marginLeft:168, gap:8 }}>
    <div style={{ display:'flex', fontSize:38, fontWeight:800, color:'#ffffff', letterSpacing:'-1px', lineHeight:1 }}>
      {github?.user?.name || github?.user?.login || 'Zul'}
    </div>
    <div style={{ display:'flex', fontSize:15, color:'rgba(180,165,255,0.8)', fontWeight:400, letterSpacing:'0.3px' }}>
      {github?.user?.bio || 'College student who loves exploring the world of programming.'}
    </div>
    <div style={{ display:'flex', gap:8, marginTop:6, flexWrap: 'wrap' }}>
      {((github && github.languages && github.languages.length > 0)
        ? github.languages.slice(0, 4).map(function(l) { return l.name; })
        : ['TypeScript', 'PHP', 'Python', 'SCSS']
      ).map(function(tag, i) {
        return (
          <div key={tag + '-' + i} style={{
            display:'flex', padding:'4px 12px', borderRadius:20,
            background:'rgba(80,40,220,0.18)', border:'1px solid rgba(100,70,240,0.32)',
            color:'rgba(205,195,255,0.85)', fontSize:12, fontWeight:600,
          }}>{tag}</div>
        );
      })}
    </div>
  </div>
</div>
```

```aura width=860 height=22 link="https://collectioneur.github.io/readme-aura/"
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', padding: 0, margin: 0 }}>
    <span style={{ fontSize: 12, lineHeight: 1, color: 'rgba(150,140,200,0.55)', fontWeight: 500, letterSpacing: '0.4px' }}>powered by readme-aura</span>
  </div>
```

<h2>What teams can evaluate quickly</h2>

<table width="100%">
<tr>
<td width="33%" valign="top"><h3>Role fit</h3><p>Frontend or full-stack engineer · TypeScript · PHP · Python</p></td>
<td width="33%" valign="top"><h3>Public proof</h3><p>16 repositories · 0 stars</p></td>
<td width="33%" valign="top"><h3>Momentum</h3><p>239 contributions · 51 active days</p></td>
</tr>
</table>

<p><sub>College student who loves exploring the world of programming.</sub></p>

<h2>Proof at a glance</h2>

<table width="100%">
<tr>
<td width="25%" align="center"><strong>16</strong><br /><sub>Repositories</sub></td>
<td width="25%" align="center"><strong>0</strong><br /><sub>Stars</sub></td>
<td width="25%" align="center"><strong>239</strong><br /><sub>Contributions</sub></td>
<td width="25%" align="center"><strong>0</strong><br /><sub>Followers</sub></td>
</tr>
</table>

<p align="center">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://www.gitskins.com/api/section/stats?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-stats-1&mode=light" />
  <img src="https://www.gitskins.com/api/section/stats?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-stats-1&mode=dark" width="100%" alt="Zul GitHub proof metrics" />
</picture>
</p>

<h2>Selected work</h2>

<table width="100%">
<tr>
<td width="58%" valign="top">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://www.gitskins.com/api/section/projects?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&repos=rjgrl%2Fdeepcool-lm%2Crjgrl%2Fsensor-panel&v=recruiter-projects-1&mode=light" />
  <img src="https://www.gitskins.com/api/section/projects?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&repos=rjgrl%2Fdeepcool-lm%2Crjgrl%2Fsensor-panel&v=recruiter-projects-1&mode=dark" width="100%" alt="Zul selected projects" />
</picture>
</td>
<td width="42%" valign="top">
<h3><a href="https://github.com/rjgrl/deepcool-lm">deepcool-lm</a></h3>
<p>An alternative software to DeepCool CONTROL SOFTWARE DeepCreative.</p>
<p><sub>Rust · ⭐ 0 · 🍴 0</sub></p>
<p><a href="https://github.com/rjgrl/deepcool-lm">Read the repository →</a></p>
</td>
</tr>
</table>

<h2>Technical toolkit</h2>

<p align="center">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://www.gitskins.com/api/section/stack?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-stack-1&mode=light" />
  <img src="https://www.gitskins.com/api/section/stack?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-stack-1&mode=dark" width="100%" alt="Zul technology stack" />
</picture>
</p>

<table width="100%" align="center">
<tr>
<td width="20%" align="center"><strong>TypeScript</strong><br /><sub>56% of public code</sub></td>
<td width="20%" align="center"><strong>PHP</strong><br /><sub>18% of public code</sub></td>
<td width="20%" align="center"><strong>Python</strong><br /><sub>9% of public code</sub></td>
<td width="20%" align="center"><strong>SCSS</strong><br /><sub>7% of public code</sub></td>
<td width="20%" align="center"><strong>JavaScript</strong><br /><sub>5% of public code</sub></td>
</tr>
</table>

<h2>Consistency signal</h2>

<p align="center">
<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://www.gitskins.com/api/section/heatmap?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-heatmap-1&mode=light" />
  <img src="https://www.gitskins.com/api/section/heatmap?username=rjgrl&theme=github-dark&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F28331866%3Fu%3Dba70d06450e9d18f9eef8a9589e56d875dff45b2%26v%3D4&v=recruiter-heatmap-1&mode=dark" width="100%" alt="Zul contribution activity" />
</picture>
</p>

<hr />

<table width="100%">
<tr>
<td width="62%" valign="middle"><h2>Let’s talk about the next build</h2><p>Open to thoughtful teams, ambitious products, and useful engineering work.</p></td>
<td width="38%" valign="middle" align="right"><a href="https://github.com/rjgrl">GitHub</a></td>
</tr>
</table>
