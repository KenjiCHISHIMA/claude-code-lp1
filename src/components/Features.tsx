'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Users, BookOpen, Target, Rocket } from 'lucide-react'

const features = [
  {
    icon: Code2,
    title: 'AI駆動コーディング',
    description: 'Claude CodeでAIと協働し、コード生成・リファクタリング・デバッグを効率化',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: '10倍の生産性',
    description: '従来のコーディング時間を大幅短縮。反復作業を自動化し、創造的な作業に集中',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'ペアプログラミング',
    description: 'AIをパートナーとした新しいペアプログラミング体験で、コード品質を向上',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BookOpen,
    title: '実践的カリキュラム',
    description: '50以上の実際のプロジェクトを通じて、実務で使えるスキルを習得',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: '個別最適化学習',
    description: 'あなたのスキルレベルと目標に合わせてカスタマイズされた学習パス',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: '最新技術対応',
    description: '常に進化するAI技術とツールにいち早く対応。最前線の知識を提供',
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-purple-600 font-medium">なぜClaude Codeなのか</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            次世代の開発スキルを
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              身につけよう
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AIプログラミングの時代に必要なスキルを、実践的なプロジェクトを通じて学習。
            従来の開発手法を革新する新しいアプローチを習得できます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl" 
                     style={{
                       backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`
                     }}
                />
                
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <motion.div 
                  className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
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
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              開発者のための、開発者による講座
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              現役エンジニアが実際の開発現場で培ったノウハウを、
              実践的なプロジェクトを通じて学習できます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '95%', label: '実習時間の割合' },
                { value: '50+', label: '実践プロジェクト' },
                { value: '24/7', label: 'サポート体制' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}