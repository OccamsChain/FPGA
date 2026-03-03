## FPGA-Based Real-Time Speech Enhancement

### Overview

Implementing a hybrid approach combining adaptive filtering and lightweight CNNs on Xilinx Zynq-7000 SoC for low-latency noise reduction in resource-constrained environments.

**Key Objectives:**
- Real-time processing with < 10ms algorithmic latency
- 8-bit quantized CNN model maintaining >90% of floating-point performance
- Power consumption below 2W in typical operating conditions
- Speech intelligibility (STOI > 0.85) across SNR conditions

### Architecture

```
Input Audio (16kHz) → Frame Buffer → STFT → Spectral Subtraction 
→ CNN Enhancement → ISTFT → Output
```

### Tech Stack

- **DSP Tools:** MATLAB, NumPy, SciPy
- **ML Framework:** PyTorch, TensorFlow (quantization)
- **Hardware Tools:** Vivado HLS, Xilinx SDK, PetaLinux
- **Platforms:** Zynq-7020 (XC7Z020), Intel Cyclone V
- **Scripting:** Python, Bash, TCL

### Current Status

| Phase | Status | Date |
|-------|--------|------|
| Dataset Curation | Complete | Jan 2025 |
| Baseline DSP Implementation |  Complete | Feb 2025 |
| FPGA Hardware Design | Complete | June 2025 |
| CNN Model Training | In Progress | Dec 2025 |
| Hardware-Aware Quantization | Pending 
| Integration & Validation |  Pending 

### Preliminary Results

Simulation results show improved speech quality metrics:

- Input SNR: 0 dB → Output SNR: 12.4 dB
- STOI: 0.84 (at 0 dB input)
- PESQ: 2.58 (at 0 dB input)

FPGA resource utilization (estimated):
- DSP Slices: 58% (128/220)
- BRAM: 32% (45/140)
- LUTs: 23% (12,400/53,200)

---

## Other Projects

### Audio Dataset Preprocessing Pipeline (will showcase on github)
Python-based pipeline for handling speech corpora including LibriSpeech and TIMIT. Spectrogram generation, noise mixing at various SNRs, and data augmentation.

---

## Publications & Presentations

*(Will update as thesis progresses)*

---

*A work in progress — code and documentation will be made public as the research matures.*
