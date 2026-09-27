import React, { useState } from 'react';
import { CONFIG } from '../config';
import {
  X,
  BookOpen,
  Sparkles,
  Layers,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';

interface MateriModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MateriModal: React.FC<MateriModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'lingga' | 'tiron'>('lingga');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Modal */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-5 sm:p-6 shrink-0 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                  Materi Bahasa Bali Kelas {CONFIG.KELAS}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">
                  Materi Kruna Lingga lan Kruna Tiron
                </h3>
              </div>
            </div>
            <button
              id="btn-close-materi-modal"
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              title="Tutup Materi"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tab Selector: 2 Tab Saja (Kruna Lingga & Kruna Tiron) */}
          <div className="flex items-center gap-2 mt-5 overflow-x-auto pb-1 text-xs sm:text-sm font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('lingga')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'lingga'
                  ? 'bg-white text-blue-800 shadow-md font-extrabold'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>1. Kruna Lingga (Kata Dasar)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tiron')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'tiron'
                  ? 'bg-white text-blue-800 shadow-md font-extrabold'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>2. Kruna Tiron (Kata Berimbuhan)</span>
            </button>
          </div>
        </div>

        {/* Konten Scrollable */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1 text-slate-800 text-xs sm:text-sm leading-relaxed">
          {/* ============================================================== */}
          {/* TAB 1: KRUNA LINGGA */}
          {/* ============================================================== */}
          {activeTab === 'lingga' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Box Pengertian */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-50 border border-blue-200">
                <h4 className="text-sm sm:text-base font-extrabold text-blue-950 flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Teges Kruna Lingga (Pengertian Kata Dasar)</span>
                </h4>
                <p className="text-blue-900 leading-relaxed">
                  <strong>Kruna lingga</strong> inggih punika kruna sane pinih riin utawi kruna sane durung polih paweweh/wewehan napi-napi (ring Basa Indonesia kawastanin <em>kata dasar</em>). Kruna lingga puniki dados tatilaran ngwangun kruna-kruna lianan sakadi kruna tiron sasampun kapolihang wewehan.
                </p>
              </div>

              {/* Soroh Kruna Lingga Manut Akeh Kecap */}
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-700" />
                  <span>Soroh Kruna Lingga Manut Akeh Kecapnyane (Jumlah Suku Kata)</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Akecap */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-blue-800 text-xs sm:text-sm">
                        1. Kruna Lingga Akecap (1 Suku Kata)
                      </span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">
                        1 Kecap
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      Kruna lingga sane wantah kawangun antuk asiki kecap (satu suku kata).
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-1.5">
                      {['yeh', 'don', 'ron', 'tas', 'pan', 'ri', 'bok', 'bat', 'bus'].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-800 shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Kalih Kecap */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-emerald-800 text-xs sm:text-sm">
                        2. Kruna Lingga Kalih Kecap (2 Suku Kata)
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        2 Kecap
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      Kruna lingga sane kawangun antuk kalih kecap (dua suku kata). Pinih akeh kruna ring basa Bali marupa kruna lingga kalih kecap.
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-1.5">
                      {['jalan', 'tegeh', 'jani', 'jemak', 'adep', 'beli', 'bapa', 'meme', 'tulis', 'saur', 'alap'].map(
                        (item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-800 shadow-2xs"
                          >
                            {item}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Tigang Kecap */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-amber-800 text-xs sm:text-sm">
                        3. Kruna Lingga Tigang Kecap (3 Suku Kata)
                      </span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded">
                        3 Kecap
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      Kruna lingga sane kawangun antuk tigang kecap (tiga suku kata).
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-1.5">
                      {['semanggi', 'sesapi', 'keladi', 'celagi', 'sumaga', 'bungkulan'].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-800 shadow-2xs"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Petang & Limang Kecap */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-indigo-800 text-xs sm:text-sm">
                        4. Petang &amp; Limang Kecap (4 &amp; 5 Suku Kata)
                      </span>
                      <span className="text-[10px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">
                        4 &amp; 5 Kecap
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs">
                      Kruna lingga sane kawangun antuk petang kecap utawi limang kecap.
                    </p>
                    <div className="pt-1.5 flex flex-wrap gap-1.5">
                      {[
                        { word: 'katimaha', desc: '4 kecap' },
                        { word: 'kaliyet-liyet', desc: '4 kecap' },
                        { word: 'tambulilingan', desc: '5 kecap' },
                      ].map((item) => (
                        <span
                          key={item.word}
                          className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-mono font-bold text-slate-800 shadow-2xs flex items-center gap-1"
                        >
                          <span>{item.word}</span>
                          <span className="text-[10px] text-slate-400">({item.desc})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: KRUNA TIRON */}
          {/* ============================================================== */}
          {activeTab === 'tiron' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Box Pengertian */}
              <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200">
                <h4 className="text-sm sm:text-base font-extrabold text-emerald-950 flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Teges Kruna Tiron (Pengertian Kata Berimbuhan)</span>
                </h4>
                <p className="text-emerald-900 leading-relaxed">
                  <strong>Kruna tiron</strong> inggih punika kruna lingga sane sampun kapolihin paweweh utawi wewehan (ring Basa Indonesia kawastanin <em>kata berimbuhan</em> utawi <em>kata jadian</em>). Wewehan punika kakepah dados 4 pahan utama:
                </p>
              </div>

              {/* 4 Soroh Wewehan */}
              <div className="space-y-4">
                {/* 1. Pangater (Prefiks) */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Pangater (Awalan / Prefiks)
                      </h5>
                      <p className="text-xs text-slate-500">
                        Wewehan sane kagenahang ring <strong>ajeng / arep</strong> kruna lingga.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater ma- :</span>
                      <p className="text-slate-700 font-mono">ma- + jalan = <strong>majalan</strong></p>
                      <p className="text-slate-700 font-mono">ma- + gae = <strong>magae</strong></p>
                      <p className="text-slate-700 font-mono">ma- + sare = <strong>masare</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater ka- :</span>
                      <p className="text-slate-700 font-mono">ka- + jemak = <strong>kajemak</strong></p>
                      <p className="text-slate-700 font-mono">ka- + adep = <strong>kaadep</strong></p>
                      <p className="text-slate-700 font-mono">ka- + tunden = <strong>katunden</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater sa- :</span>
                      <p className="text-slate-700 font-mono">sa- + bilang = <strong>sabilang</strong></p>
                      <p className="text-slate-700 font-mono">sa- + wai = <strong>sawaian</strong></p>
                      <p className="text-slate-700 font-mono">sa- + bulan = <strong>sabulan</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater a- :</span>
                      <p className="text-slate-700 font-mono">a- + ukud = <strong>aukud</strong></p>
                      <p className="text-slate-700 font-mono">a- + bulan = <strong>abulan</strong></p>
                      <p className="text-slate-700 font-mono">a- + siki = <strong>asiki</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater pa- / pi- :</span>
                      <p className="text-slate-700 font-mono">pa- + jalan = <strong>pajalan</strong></p>
                      <p className="text-slate-700 font-mono">pi- + olas = <strong>piolas</strong></p>
                      <p className="text-slate-700 font-mono">pi- + tresna = <strong>pitresna</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-blue-700 block mb-1">Pangater pra- / pari- :</span>
                      <p className="text-slate-700 font-mono">pra- + kanti = <strong>prakanti</strong></p>
                      <p className="text-slate-700 font-mono">pari- + laksana = <strong>parilaksana</strong></p>
                      <p className="text-slate-700 font-mono">pati- + grudug = <strong>patigrudug</strong></p>
                    </div>
                  </div>
                </div>

                {/* 2. Seselan (Infiks) */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Seselan (Sisipan / Infiks)
                      </h5>
                      <p className="text-xs text-slate-500">
                        Wewehan sane kaselapang ring <strong>tengahing</strong> kruna lingga (-in-, -um-, -el-, -er-).
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-emerald-700 block mb-1">Seselan -in- :</span>
                      <p className="text-slate-700 font-mono">surat + -in- = <strong>sinurat</strong></p>
                      <p className="text-slate-700 font-mono">tulis + -in- = <strong>tinulis</strong></p>
                      <p className="text-slate-700 font-mono">jemak + -in- = <strong>jinemak</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-emerald-700 block mb-1">Seselan -um- :</span>
                      <p className="text-slate-700 font-mono">saur + -um- = <strong>sumaur</strong></p>
                      <p className="text-slate-700 font-mono">tanduk + -um- = <strong>tumanduk</strong></p>
                      <p className="text-slate-700 font-mono">rasuk + -um- = <strong>rumasuk</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-emerald-700 block mb-1">Seselan -el- :</span>
                      <p className="text-slate-700 font-mono">tapak + -el- = <strong>telapak</strong></p>
                      <p className="text-slate-700 font-mono">gebag + -el- = <strong>glebag</strong></p>
                      <p className="text-slate-700 font-mono">tusuk + -el- = <strong>telusuk</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-emerald-700 block mb-1">Seselan -er- :</span>
                      <p className="text-slate-700 font-mono">gigi + -er- = <strong>gerigi</strong></p>
                      <p className="text-slate-700 font-mono">kelip + -er- = <strong>kerelip</strong></p>
                      <p className="text-slate-700 font-mono">tundun + -er- = <strong>terundun</strong></p>
                    </div>
                  </div>
                </div>

                {/* 3. Pangiring (Sufiks) */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 font-black text-xs flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Pangiring (Akhiran / Sufiks)
                      </h5>
                      <p className="text-xs text-slate-500">
                        Wewehan sane kagenahang ring <strong>pungkur / ungkur</strong> kruna lingga (-ang, -in, -an, -e, -ne).
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-amber-700 block mb-1">Pangiring -ang :</span>
                      <p className="text-slate-700 font-mono">jemak + -ang = <strong>jemakang</strong></p>
                      <p className="text-slate-700 font-mono">tulis + -ang = <strong>tulisang</strong></p>
                      <p className="text-slate-700 font-mono">adep + -ang = <strong>adepang</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-amber-700 block mb-1">Pangiring -in :</span>
                      <p className="text-slate-700 font-mono">alap + -in = <strong>alapin</strong></p>
                      <p className="text-slate-700 font-mono">beli + -in = <strong>belinin</strong></p>
                      <p className="text-slate-700 font-mono">jemak + -in = <strong>jemakin</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-amber-700 block mb-1">Pangiring -an :</span>
                      <p className="text-slate-700 font-mono">luung + -an = <strong>luungan</strong></p>
                      <p className="text-slate-700 font-mono">tegeh + -an = <strong>tegehan</strong></p>
                      <p className="text-slate-700 font-mono">lantang + -an = <strong>lantangan</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-amber-700 block mb-1">Pangiring -e / -ne :</span>
                      <p className="text-slate-700 font-mono">jaran + -e = <strong>jarané</strong></p>
                      <p className="text-slate-700 font-mono">meja + -ne = <strong>mejané</strong></p>
                      <p className="text-slate-700 font-mono">buku + -ne = <strong>bukuné</strong></p>
                    </div>
                  </div>
                </div>

                {/* 4. Gabungan Wewehan (Konfiks) */}
                <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-2xs space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-black text-xs flex items-center justify-center">
                      4
                    </span>
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm sm:text-base">
                        Gabungan Wewehan (Konfiks)
                      </h5>
                      <p className="text-xs text-slate-500">
                        Wewehan gabungan ring ajeng miwah ring pungkur kruna lingga mawarni-warni.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-indigo-700 block mb-1">ma-...-an :</span>
                      <p className="text-slate-700 font-mono">ma- + jojor + -an = <strong>majojoran</strong></p>
                      <p className="text-slate-700 font-mono">ma- + gending + -an = <strong>magendingan</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-indigo-700 block mb-1">pa-...-an :</span>
                      <p className="text-slate-700 font-mono">pa- + abian + -an = <strong>paabianan</strong></p>
                      <p className="text-slate-700 font-mono">pa- + marga + -an = <strong>pamargan</strong></p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-bold text-indigo-700 block mb-1">ka-...-an :</span>
                      <p className="text-slate-700 font-mono">ka- + suci + -an = <strong>kasucian</strong></p>
                      <p className="text-slate-700 font-mono">ka- + sakti + -an = <strong>kasaktian</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Modal */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            Disusun untuk siswa Kelas {CONFIG.KELAS} {CONFIG.SEKOLAH} materi Kruna Lingga lan Kruna Tiron.
          </p>
          <button
            id="btn-footer-close-materi"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            Tutup &amp; Kembali ke Tes
          </button>
        </div>
      </div>
    </div>
  );
};
