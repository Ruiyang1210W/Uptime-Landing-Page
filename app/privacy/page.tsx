export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 700, margin: "60px auto", padding: "0 24px", fontFamily: "sans-serif" }}>
      <h1>Uptime! Privacy Policy</h1>
      <p>Last updated: June 2026</p>

      <h2>Data Collection</h2>
      <p>Uptime! does not collect, store, or transmit 
      any personal user data to external servers.</p>

      <h2>Local Storage</h2>
      <p>Sitting session data, break history, and streak 
      counts are stored locally on your device using 
      chrome.storage.local and never leave your browser.</p>

      <h2>Third-Party API</h2>
      <p>Uptime! uses the Anthropic Claude API solely 
      to generate fun fact rewards. No personal user 
      data is included in these API requests.</p>

      <h2>Contact</h2>
      <p>ruiyangwang1210@g.ucla.edu</p>
    </main>
  )
}