import React, { useState } from 'react';

interface SubscriptionModalProps {
  onClose: () => void;
}

export default function SubscriptionModal({ onClose }: SubscriptionModalProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState<string[]>(['FASHION']);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const togglePreference = (pref: string) => {
    setPreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) {
      alert('이름과 이메일을 입력해 주세요.');
      return;
    }
    if (!isAgreed) {
      alert('개인정보 수집 및 이용 약관에 동의해 주세요.');
      return;
    }
    
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-55 overflow-y-auto animate-fade-in flex justify-center items-center p-4">
      <div className="relative w-full max-w-lg bg-[#131313] border border-white/20 text-white p-6 md:p-10 shadow-2xl flex flex-col justify-between">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-editorial-gray hover:text-white transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined !text-[28px]">close</span>
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2 mt-4">
              <span className="bg-acid-green text-black font-space-mono text-[10px] tracking-widest px-2.5 py-1 uppercase font-bold">
                DAZEDPLUS MEMBERSHIP
              </span>
              <h3 className="text-3xl font-extrabold font-bodoni uppercase tracking-tighter text-white">
                JOIN THE CLUB
              </h3>
              <p className="text-xs font-hanken text-editorial-gray leading-relaxed max-w-sm mx-auto">
                데이즈드 플러스에 가입하고 프리미엄 패션 아카이브, 오뜨꾸뛰르 트렌드 레터, 한정판 온라인 뷰티 피드를 수신하세요.
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4">
              {/* Name field */}
              <div>
                <label className="block text-[10px] font-space-mono text-editorial-gray tracking-widest uppercase mb-1">
                  FULL NAME / 이름
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 김디자이너"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-acid-green rounded-none"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-[10px] font-space-mono text-editorial-gray tracking-widest uppercase mb-1">
                  EMAIL ADDRESS / 이메일
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/20 px-3 py-2.5 text-sm text-white focus:outline-none focus:border-acid-green rounded-none"
                />
              </div>

              {/* Preference checkbox choices */}
              <div>
                <label className="block text-[10px] font-space-mono text-editorial-gray tracking-widest uppercase mb-2">
                  INTERESTS / 관심 분야
                </label>
                <div className="flex flex-wrap gap-2">
                  {['FASHION', 'BEAUTY', 'CULTURE', 'ART', 'MUSIC'].map((item) => {
                    const active = preferences.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => togglePreference(item)}
                        className={`text-xs font-mono border px-3 py-1.5 rounded-none transition-all ${
                          active
                            ? 'bg-acid-green text-black border-acid-green font-bold'
                            : 'border-white/10 text-white hover:border-white/35'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms agreement */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  id="agree-checkbox"
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 accent-acid-green bg-[#131313]"
                />
                <label htmlFor="agree-checkbox" className="text-xxs text-stone-400 select-none cursor-pointer leading-relaxed">
                  (필수) 개인정보 수집 및 데이즈드 플러스 뉴스레터 수신 동의. 가입 처리와 맞춤형 트렌드 통계 이외에는 일체의 데이터가 보존되지 않습니다.
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full bg-acid-green text-black hover:bg-white hover:text-black transition-all py-3 text-xs font-mono font-bold tracking-widest uppercase flex items-center justify-center gap-2"
              >
                SUBMIT REGISTRATION
                <span className="material-symbols-outlined !text-[16px]">arrow_right_alt</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full text-center text-xs font-mono text-editorial-gray hover:text-white py-2 transition-colors uppercase"
              >
                BACK TO FEED
              </button>
            </div>
          </form>
        ) : (
          /* Thank You screen step */
          <div className="text-center py-10 space-y-6">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-none bg-acid-green text-black animate-fade-in">
              <span className="material-symbols-outlined !text-[36px]">done_all</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-bodoni text-white uppercase tracking-tighter">
                REGISTRATION SUCCESSFUL
              </h3>
              <p className="text-sm font-hanken text-acid-green font-bold">
                환영합니다, {name}님!
              </p>
              <p className="text-xs font-hanken text-stone-400 leading-relaxed max-w-sm mx-auto">
                데이즈드 플러스 구독 가입이 완료되었습니다. 제공해주신 이메일 <b className="text-stone-300 font-mono">{email}</b> 주소로 가입 확인 메일과 비정기 리조트 기프트 카탈로그를 발송해 드립니다.
              </p>
            </div>

            <div className="border-t border-white/15 pt-6 flex justify-center">
              <button
                onClick={onClose}
                className="bg-white text-black hover:bg-acid-green hover:text-black transition-all px-8 py-2.5 text-xs font-mono font-bold tracking-widest"
              >
                CONTINUE EXPLORING
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
