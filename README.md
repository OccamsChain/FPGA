# Caihong (Cai) Cai

MSc Student in Electrical & Computer Engineering at Queen's University. Researching real-time speech enhancement using DSP techniques and hardware acceleration.

## About

I'm a graduate student working at the intersection of Digital Signal Processing and Deep Learning. My current research focuses on implementing efficient speech enhancement algorithms on FPGAs for embedded and low-power applications.

### Research Interests

- Digital Signal Processing (DSP)
- FPGA/Hardware Acceleration
- Machine Learning for Audio Processing
- Real-time Embedded Systems
- Adaptive Filtering

---

## Current Project: FPGA-Based Real-Time Speech Enhancement

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
| Dataset Curation | ✅ Complete | Jan 2024 |
| Baseline DSP Implementation | ✅ Complete | Feb 2024 |
| FPGA Hardware Design | ✅ Complete | Mar 2024 |
| CNN Model Training | 🔄 In Progress | Apr 2024 |
| Hardware-Aware Quantization | ⏳ Pending | May 2024 |
| Integration & Validation | ⏳ Pending | Jun 2024 |

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

### Adaptive Noise Cancellation in MATLAB
Implemented NLMS and RLS algorithms for single-channel noise reduction. Evaluated convergence properties under varying SNR conditions.

### Audio Dataset Preprocessing Pipeline
Python-based pipeline for handling speech corpora including LibriSpeech and TIMIT. Spectrogram generation, noise mixing at various SNRs, and data augmentation.

---

## Publications & Presentations

*(Will update as thesis progresses)*

---

## Education

**Master of Science in Electrical Engineering**  
Queen's University, Kingston, ON  
*Expected: 2024*

**Bachelor of Engineering in Electrical Engineering**  
[Undergraduate Institution], [Year]

---

## Contact

- **Email:** cai@queensu.ca
- **GitHub:** [github.com/caihong-cai]
- **LinkedIn:** [linkedin.com/in/caihong-cai]

---

*A work in progress — code and documentation will be made public as the research matures.*