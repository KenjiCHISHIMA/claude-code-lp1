'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'ベーシック',
    subtitle: '個人学習者向け',
    monthlyPrice: 9800,
    yearlyPrice: 98000,
    savings: 19600,
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    features: [
      '基本カリキュラムへのアクセス',
      'オンライン教材・動画コンテンツ',
      'コミュニティフォーラム参加',
      '基本的な演習問題',
      'メール質問サポート（48時間以内回答）',
      '修了証書の発行'
    ],
    notIncluded: [
      '1対1メンタリング',
      'コードレビュー',
      '就職サポート'
    ]
  },
  {
    name: 'プロフェッショナル',
    subtitle: '本格的にスキルアップしたい方向け',
    monthlyPrice: 19800,
    yearlyPrice: 198000,
    savings: 39600,
    icon: Crown,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      'ベーシックプランの全機能',
      '月2回の1対1メンタリング（60分）',
      'コードレビューサービス',
      '実践プロジェクトの添削',
      'Slack質問サポート（24時間以内回答）',
      '就職・転職相談',
      'ポートフォリオ作成サポート',
      '企業紹介サービス'
    ],
    notIncluded: []
  },
  {
    name: 'エンタープライズ',
    subtitle: 'チーム・企業向け',
    monthlyPrice: 49800,
    yearlyPrice: 498000,
    savings: 99600,
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    features: [
      'プロフェッショナルプランの全機能',
      '無制限1対1メンタリング',
      '専属メンターのアサイン',
      'カスタマイズカリキュラム',
      '企業内研修対応',
      '即時質問サポート（Slack）',
      '成果報告レポート',
      '複数名での受講割引',
      '企業向け請求書発行'
    ],
    notIncluded: []
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600 font-medium">料金プラン</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            あなたに最適な
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              プランを選択
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            学習スタイルと目標に合わせて、3つのプランからお選びいただけます。
            年間契約で最大20%お得になります。
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button className="px-6 py-2 rounded-full bg-purple-600 text-white font-medium transition-all">
              月額
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium transition-all">
              年額（20%お得）
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最も人気
                  </div>
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl p-8 shadow-lg border-2 ${plan.popular ? 'border-purple-200' : 'border-gray-100'} hover:shadow-2xl transition-all duration-300 group-hover:border-purple-200`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">
                        ¥{plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-600">/月</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      年額: ¥{plan.yearlyPrice.toLocaleString()} 
                      <span className="text-green-600 font-medium ml-2">
                        (¥{plan.savings.toLocaleString()}お得)
                      </span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    今すぐ始める
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    含まれる機能
                  </h4>
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}

                  {plan.notIncluded.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h5 className="font-medium text-gray-500 mb-3 text-sm">
                        含まれない機能
                      </h5>
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3 mb-2">
                          <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                            <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                          </div>
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                30日間返金保証
              </h3>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              もしコースにご満足いただけない場合、30日以内であれば理由を問わず全額返金いたします。
              安心してお申し込みください。
            </p>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            プランについてご質問がございますか？
          </p>
          <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
            よくある質問を見る →
          </button>
        </motion.div>
      </div>
    </section>
  )
}