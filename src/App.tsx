import { useState } from 'react'
import { Cpu, Signal, Database, Activity, BarChart3, FileText, Github, Mail, GraduationCap } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const phases = [
    { id: 1, title: 'Dataset Curation', status: 'complete', date: 'Jan 2024' },
    { id: 2, title: 'Baseline DSP Implementation', status: 'complete', date: 'Feb 2024' },
    { id: 3, title: 'FPGA Hardware Design', status: 'complete', date: 'Mar 2024' },
    { id: 4, title: 'CNN Model Training', status: 'in-progress', date: 'Apr 2024' },
    { id: 5, title: 'Hardware-Aware Quantization', status: 'pending', date: 'May 2024' },
    { id: 6, title: 'Integration & Validation', status: 'pending', date: 'Jun 2024' }
  ]

  const metrics = [
    { label: 'Dataset Size', value: '120 hours', desc: 'Clean + noisy recordings' },
    { label: 'Model Params', value: '2.4M', desc: '8-bit quantized' },
    { label: 'Target Freq', value: '100 MHz', desc: 'FPGA clock domain' },
    { label: 'Latency', value: '< 5ms', desc: 'Real-time requirement' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-6 h-6" />
            <span className="text-blue-200 text-sm font-medium">Queen's University · MSc Electrical Engineering</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">Real-Time Speech Enhancement on FPGA</h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            An implementation of adaptive filtering and lightweight CNNs on Xilinx Zynq-7000 for low-latency noise reduction in embedded systems.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#project" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition">
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a href="#contact" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-8">
            {['overview', 'methodology', 'progress', 'results'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium capitalize transition ${
                  activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="w-6 h-6 text-blue-600" />
                Project Overview
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <p className="text-gray-700 mb-4">
                  Speech enhancement remains challenging in resource-constrained embedded applications where both latency and power consumption are critical. 
                  My thesis explores a hybrid approach combining:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span><strong>Adaptive Filtering:</strong> NLMS and RLS algorithms for initial noise suppression</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span><strong>Lightweight CNN:</strong> 1D dilated convolutions for residual noise modeling</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-semibold">•</span>
                    <span><strong>FPGA Acceleration:</strong> HLS-based implementation on Zynq-7000 SoC</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Research Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Achieve real-time processing with < 10ms algorithmic latency',
                  'Implement 8-bit quantized CNN model maintaining >90% of float performance',
                  'Reduce power consumption below 2W in typical operating conditions',
                  'Maintain speech intelligibility (STOI > 0.85) across SNR conditions'
                ].map((obj, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                    <p className="text-gray-700">{obj}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Methodology Tab */}
        {activeTab === 'methodology' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Signal className="w-6 h-6 text-blue-600" />
                DSP Pipeline Architecture
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm font-mono">
{`Input Audio (16kHz)
    ↓
[Frame Buffer] — 256 samples
    ↓
[STFT] — Hamming window, 50% overlap
    ↓
[Spectral Subtraction] — Noise floor estimation
    ↓
[CNN Enhancement] — MISO architecture
    ↓
[ISTFT] — Overlap-add reconstruction
    ↓
Output`}
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">CNN Architecture</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Layer</th>
                      <th className="text-left py-2">Config</th>
                      <th className="text-left py-2">Output</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="py-2">Input</td>
                      <td>-</td>
                      <td>1 × 129</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Conv1D</td>
                      <td>32 kernels, size=3</td>
                      <td>32 × 127</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">ReLU</td>
                      <td>-</td>
                      <td>32 × 127</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Dilated Conv</td>
                      <td>64 kernels, dilation=2</td>
                      <td>64 × 125</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Batch Norm</td>
                      <td>-</td>
                      <td>64 × 125</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Conv1D</td>
                      <td>32 kernels, size=1</td>
                      <td>32 × 125</td>
                    </tr>
                    <tr>
                      <td className="py-2">Output</td>
                      <td>Linear</td>
                      <td>1 × 129</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-blue-600" />
                FPGA Implementation
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border space-y-3 text-gray-700">
                <p><strong>Target Platform:</strong> Xilinx Zynq-7020 (XC7Z020)</p>
                <p><strong>Toolchain:</strong> Vivado HLS 2022.1 + PetaLinux</p>
                <p><strong>Architecture:</strong> PL region for DSP pipeline, ARM Cortex-A9 for control</p>
                <p><strong>Memory:</strong> 512MB DDR3, 256KB on-chip BRAM for frame buffers</p>
                <p><strong>Interface:</strong> I2S for audio, AXI-Stream for data flow</p>
              </div>
            </section>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === 'progress' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Current Status
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="space-y-4">
                  {phases.map((phase) => (
                    <div key={phase.id} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        phase.status === 'complete' ? 'bg-green-600' : 
                        phase.status === 'in-progress' ? 'bg-blue-600' : 'bg-gray-300'
                      }`}>
                        {phase.status === 'complete' ? '✓' : phase.id}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{phase.title}</span>
                          <span className="text-sm text-gray-500">{phase.date}</span>
                          {phase.status === 'in-progress' && (
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">In Progress</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((m, i) => (
                  <div key={i} className="bg-white rounded-lg p-5 shadow-sm border text-center">
                    <div className="text-2xl font-bold text-blue-600">{m.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{m.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Deliverables
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Datasets (LibriSpeech, TIMIT internal subset)</li>
                  <li>✅ MATLAB reference implementation</li>
                  <li>✅ Python training pipeline (PyTorch)</li>
                  <li>⏳ FPGA HLS implementation (PR pending)</li>
                  <li>⏳ Thesis documentation (draft in progress)</li>
                  <li>⏳ Real-time demo system (hardware setup pending)</li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Results Tab */}
        {activeTab === 'results' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-blue-600" />
                Preliminary Results
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <p className="text-gray-600 mb-4 text-sm italic">Note: Results are from simulation. Hardware validation in progress.</p>
                
                <h3 className="font-semibold mb-3">Speech Enhancement Metrics (Simulated)</h3>
                <table className="w-full text-sm mb-6">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Input SNR</th>
                      <th className="text-left py-2">Output SNR</th>
                      <th className="text-left py-2">STOI</th>
                      <th className="text-left py-2">PESQ</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="py-2">-5 dB</td>
                      <td className="py-2">8.2 dB</td>
                      <td className="py-2">0.76</td>
                      <td className="py-2">2.31</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">0 dB</td>
                      <td className="py-2">12.4 dB</td>
                      <td className="py-2">0.84</td>
                      <td className="py-2">2.58</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">5 dB</td>
                      <td className="py-2">14.7 dB</td>
                      <td className="py-2">0.89</td>
                      <td className="py-2">2.81</td>
                    </tr>
                    <tr>
                      <td className="py-2">10 dB</td>
                      <td className="py-2">16.3 dB</td>
                      <td className="py-2">0.92</td>
                      <td className="py-2">2.97</td>
                    </tr>
                  </tbody>
                </table>

                <h3 className="font-semibold mb-3">Resource Utilization (Synthesis Estimate)</h3>
                <div className="space-y-2">
                  {[
                    ['DSP Slices', '128 / 220', '58%'],
                    ['BRAM', '45 / 140', '32%'],
                    ['LUTs', '12,400 / 53,200', '23%'],
                    ['FFs', '8,200 / 106,400', '7%']
                  ].map(([label, used, percent]) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{label}</span>
                        <span className="text-gray-600">{used} ({percent})</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full" 
                          style={{ width: percent }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border space-y-3">
                <p className="text-gray-700">• Complete hardware-in-the-loop testing with acquisition board</p>
                <p className="text-gray-700">• Optimize CNN for 8-bit fixed-point arithmetic</p>
                <p className="text-gray-700">• Measure actual power consumption on target hardware</p>
                <p className="text-gray-700">• Write thesis chapters on methodology and experimental results</p>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Contact */}
      <footer id="contact" className="bg-white border-t mt-12 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="font-semibold mb-4">Caihong (Cai)</h3>
          <p className="text-gray-600 mb-4">MSc Student, Electrical & Computer Engineering<br/>Queen's University</p>
          <p className="text-sm text-gray-500">
            Research interests: Digital Signal Processing, Machine Learning, FPGA Design
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:cai@queensu.ca" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <circle cx="12" cy="12" r="6" strokeWidth="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  )
}

export default App