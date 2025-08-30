'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, ArrowRight } from 'lucide-react'

const modules = [
  {
    week: '第1-2週',
    title: 'Claude Code入門',
    duration: '8時間',
    lessons: [
      'Claude Codeの基本概念と環境構築',
      'AIアシスタントとの効果的な対話方法',
      'プロンプトエンジニアリングの基礎',
      'ファーストプロジェクト: Todo アプリの作成'
    ]
  },
  {
    week: '第3-4週',
    title: 'コード生成とリファクタリング',
    duration: '12時間',
    lessons: [
      '自然言語からのコード生成テクニック',
      'レガシーコードのモダン化',
      'テストコードの自動生成',
      '実践プロジェクト: REST API の構築'
    ]
  },
  {
    week: '第5-6週',
    title: 'デバッグとテスト戦略',
    duration: '10時間',
    lessons: [
      'AIを活用したバグの特定と修正',
      'テスト駆動開発とAI',
      'パフォーマンス最適化',
      '実践プロジェクト: Eコマースサイト'
    ]
  },
  {
    week: '第7-8週',
    title: 'フルスタック開発',
    duration: '15時間',
    lessons: [
      'フロントエンドとバックエンドの連携',
      'データベース設計とAI',
      'デプロイメント自動化',
      '実践プロジェクト: SNSアプリケーション'
    ]
  },
  {
    week: '第9-10週',
    title: 'AI活用の高度なテクニック',
    duration: '12時間',
    lessons: [
      'コードレビューの自動化',
      'ドキュメント生成とメンテナンス',
      'CI/CDパイプラインの構築',
      '実践プロジェクト: DevOpsワークフロー'
    ]
  },
  {
    week: '第11-12週',
    title: 'プロダクション対応',
    duration: '18時間',
    lessons: [
      'スケーラブルアーキテクチャ設計',
      'セキュリティベストプラクティス',
      'モニタリングとログ管理',
      '最終プロジェクト: 企業レベルアプリケーション'
    ]
  }
]

export default function Curriculum() {
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
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600 font-medium">カリキュラム</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            12週間で完全マスター
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              体系的学習プログラム
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            初心者から上級者まで、段階的にスキルアップできるよう設計された
            実践的なカリキュラムで、確実にスキルを身につけます。
          </p>
        </motion.div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Left side - Module info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 font-medium mb-1">
                          {module.week}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>実習メイン</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Lessons */}
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <motion.div
                          key={lessonIndex}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {lesson}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                <motion.div 
                  className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${((index + 1) / modules.length) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  コース修了後のスキル
                </h3>
                <div className="space-y-3">
                  {[
                    'AIを活用した高速コード開発',
                    'プロダクションレベルのアプリケーション構築',
                    'テスト駆動開発とCI/CDの実装',
                    '企業レベルのアーキテクチャ設計'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-300" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  75時間
                </div>
                <div className="text-xl text-blue-100 mb-6">
                  総学習時間
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all"
                >
                  詳細カリキュラムを見る
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}