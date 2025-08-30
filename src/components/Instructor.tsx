'use client'

import { motion } from 'framer-motion'
import { Award, Code, Users, Star, Github, Linkedin, Twitter } from 'lucide-react'

export default function Instructor() {
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
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-600 font-medium">講師紹介</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            業界のエキスパートから
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              直接学ぶ
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            現役で活躍するトップエンジニアが、実際の開発現場で培った
            知識とノウハウを惜しみなく共有します。
          </p>
        </motion.div>

        {/* Main Instructor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="text-center lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-block"
                >
                  <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <Code className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <Star className="w-8 h-8" fill="currentColor" />
                  </div>
                </motion.div>
                
                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-4 mt-8">
                  {[
                    { icon: Github, href: '#', color: 'hover:text-gray-900' },
                    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white rounded-full shadow-md text-gray-600 ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Profile Details */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  田中 太郎
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  シニアフルスタックエンジニア / AI開発スペシャリスト
                </p>
                
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>
                    Google、Microsoft、Metaで10年以上の開発経験を持つシニアエンジニア。
                    AIとソフトウェア開発の融合分野でのエキスパートとして、
                    数多くの大規模プロダクトの設計・開発に携わってきました。
                  </p>
                  <p>
                    Claude Code の初期開発にも参画し、AI駆動開発の最前線で活動。
                    これまでに1000人以上のエンジニアの成長をサポートしています。
                  </p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '10+', label: '年の経験' },
                    { number: '50+', label: '企業プロジェクト' },
                    { number: '1000+', label: '指導した開発者' },
                    { number: '95%', label: '受講生満足度' }
                  ].map((achievement, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {achievement.number}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            専門分野
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI開発',
                skills: ['Claude Code', 'GPT API', '機械学習', 'プロンプトエンジニアリング'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'フルスタック開発',
                skills: ['React/Next.js', 'Node.js', 'Python', 'クラウドアーキテクチャ'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'DevOps',
                skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure'],
                color: 'from-green-500 to-emerald-500'
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6`}>
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {area.title}
                </h4>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${area.color}`} />
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
              "AI時代の開発者として必要なスキルを、実践的に学べる最高の講座です。
              田中さんの指導のもと、開発効率が劇的に向上しました。"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold">山田 花子</div>
                <div className="text-gray-400 text-sm">フロントエンドエンジニア</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}