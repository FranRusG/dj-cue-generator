# DJ Cue Generator

🎧 **DJ Cue Generator** is a desktop application for DJs that analyzes songs (Makina, Hardcore, Techno...) and automatically generates strategic cue points for software like **Traktor** or **iTunes**.

## 🚀 Features

- Detects the main **drop** in the song.
- Accurately estimates **BPM** and generates the **beatgrid**.
- Adds cue points:
  - `2 bars before the drop` (single mode)
  - `Every 2 bars backwards from the drop to the intro` (progressive mode)
- Exports cues to:
  - `ID3 v2.4` tags (`CHAP` or `POPM`)
  - Optional `cue sheet (.cue)`

## 📦 Technologies

- ⚙️ **Electron + Vite + Vue 3** for the user interface
- 🧠 **Python** (librosa) for audio analysis
- 🎛️ Minimalist UI with dark mode
- 🎵 Compatible with `.mp3` and `.wav` (44.1 kHz, stereo)

## 🧰 Project Structure

```
├── backend/             # Python audio analysis modules
├── public/              # Static assets
├── src/                 # Vue 3 frontend
├── main.js              # Electron main process
├── preload.js           # Secure bridge between Electron and the web app
├── package.json         # Frontend configuration
├── vite.config.js       # Vite setup
├── .gitignore
└── README.md
```

## 🛠️ Upcoming Features

- [ ] Drag & drop support for folders
- [ ] Audio player with interactive spectrogram
- [ ] Beatgrid visualization
- [ ] Manual cue point editor
- [ ] Integration with Traktor/Rekordbox libraries

## 📝 License

MIT © 2025 Francisco Rus González
