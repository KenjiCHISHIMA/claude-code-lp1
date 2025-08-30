'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'プログラミング初心者でも受講できますか？',
    answer: 'はい、プログラミング未経験者でも安心して受講できます。基本的なプログラミング概念から丁寧に説明し、段階的にスキルアップできるよう設計されています。ただし、コンピューターの基本操作（ファイル操作、インターネット利用など）ができることが前提となります。'
  },
  {
    question: 'Claude Codeとは何ですか？使用に特別なライセンスが必要ですか？',
    answer: 'Claude CodeはAnthropic社が開発したAIプログラミングアシスタントです。本コースではClaude Codeの効果的な使用方法を学習しますが、Claude Code自体は別途利用契約が必要です。無料枠もあるため、学習開始時のコストを抑えることができます。'
  },
  {
    question: 'どのくらいの期間で修了できますか？',
    answer: '標準的な学習ペースでは12週間（約3ヶ月）で修了できます。週に6-8時間程度の学習時間を確保していただくのが理想的です。忙しい方向けに最大6ヶ月間のアクセス延長も可能です（追加料金なし）。'
  },
  {
    question: '就職・転職サポートはありますか？',
    answer: 'プロフェッショナルプラン以上では、履歴書・職務経歴書の添削、面接対策、ポートフォリオ作成指導を提供します。また、AI開発に注力する企業との提携により、修了生向けの求人紹介も行っています。ただし、就職を保証するものではありません。'
  },
  {
    question: '受講に必要な環境・機材はありますか？',
    answer: 'Windows、Mac、Linuxいずれでも受講可能です。最低4GB RAM（推奨8GB以上）、安定したインターネット接続環境が必要です。開発環境のセットアップから丁寧にサポートするため、特別な事前準備は不要です。'
  },
  {
    question: '他のプログラミング言語の経験は活かせますか？',
    answer: 'はい、既存のプログラミング経験は大いに活かせます。JavaScript、Python、Java、C#など、どの言語の経験があってもAI活用開発の手法を習得することで、生産性を大幅に向上させることができます。'
  },
  {
    question: '返金保証の条件を教えてください',
    answer: '受講開始から30日以内であれば、理由を問わず全額返金いたします。返金をご希望の場合は、サポートチームまでご連絡ください。ただし、返金後はコンテンツへのアクセスができなくなります。'
  },
  {
    question: 'プラン変更は可能ですか？',
    answer: 'はい、いつでもプランのアップグレードが可能です。差額をお支払いいただくことで、即座に上位プランの機能をご利用いただけます。ダウングレードについては、次回更新時から適用となります。'
  },
  {
    question: 'コミュニティやサポート体制について教えてください',
    answer: '活発なSlackコミュニティがあり、受講生同士での情報交換や質問ができます。講師陣も定期的に参加し、技術的な質問にお答えします。また、プランに応じてメール、Slack、1対1メンタリングでのサポートを提供しています。'
  },
  {
    question: '修了後のサポートはありますか？',
    answer: '修了後も6ヶ月間はコミュニティアクセスとメール質問サポートを継続提供します。また、カリキュラムのアップデートがあった場合、修了生は割引価格で最新版にアクセスできます。'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">よくある質問</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            疑問にお答えします
          </h2>
          <p className="text-xl text-gray-600">
            受講前の不安や疑問を解消いたします。
            その他のご質問はお気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              その他のご質問はありますか？
            </h3>
            <p className="text-gray-600 mb-6">
              専門スタッフが24時間以内にお答えいたします。
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                メールで質問する
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-colors"
              >
                チャットで相談する
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}