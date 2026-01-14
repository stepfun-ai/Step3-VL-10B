# Kimi K2 文本内容（自动抽取）

来源：`source/index-C-2eqP6Y.js` + `source/page.html`（meta）

## Meta
- Kimi K2: Open Agentic Intelligence
- Kimi K2 is our latest Mixture-of-Experts model with 32 billion activated parameters and 1 trillion total parameters. It achieves state-of-the-art performance in frontier knowledge, math, and coding among non-thinking models.

## 文本片段（清洗筛选，Top 300）
1. ` or `false` is not a valid value on index option.'),s.models=[],s):(i===`all`&&(ns(r.enableAll,'`
2. , and its growth is lagging far behind the pace of compute. This makes **token efficiency** during pre-training a new critical coefficient in the AI scaling laws. Post-training is pivotal in the
3. Duplicate `useI18n` calling by local scope. Please don't call it on local scope
4. /,alias:`string`,greedy:!0}}),e.languages.insertBefore(`cpp`,`keyword`,{
5. /.source,[ee]),lookbehind:!0,greedy:!0,inside:re(ee,A)},{pattern:n(/(^|[^@\])\$
6. '])))\S[\s\S]*(?=$)/,lookbehind:!0,alias:[n,`language-`+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/
7. :{pattern:/^\[|\]$/,alias:`punctuation`},range:{pattern:o,inside:{escape:n,
8. :{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:`language-regex`,inside:e.languages.regex},
9. :{pattern:/(^(?:\s*[ ])?)---(?!.)[\s\S]*?[ ]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,
10. :{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},
11. /,alias:`double-quoted-string`,greedy:!0,inside:{interpolation:o}}];e.languages.insertBefore(`php`,`variable`,{string:s,attribute:{pattern:/#\[(?:[^
12. :[{pattern:RegExp(/%[qQiIwWs]?/.source+n),greedy:!0,inside:{interpolation:t,string:/[\s\S]+/}},{pattern:/(
13. )*\]/,greedy:!0,alias:`attr-name`,inside:{string:null}},
14. :{pattern:/^[ ]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:t,operator:n}},
15. #])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},
16. );if(VA.call(UA.languages,r))n=UA.languages[r];else throw Error(
17. , sans-serif`,actorFontWeight:400,noteFontSize:14,noteFontFamily:`
18. , verdana, arial, sans-serif`,noteFontWeight:400,noteAlign:`center`,messageFontSize:16,messageFontFamily:`
19. , sans-serif`,personFontWeight:`normal`,external_personFontSize:14,external_personFontFamily:`
20. , sans-serif`,external_personFontWeight:`normal`,systemFontSize:14,systemFontFamily:`
21. , sans-serif`,systemFontWeight:`normal`,external_systemFontSize:14,external_systemFontFamily:`
22. , sans-serif`,external_systemFontWeight:`normal`,system_dbFontSize:14,system_dbFontFamily:`
23. , sans-serif`,system_dbFontWeight:`normal`,external_system_dbFontSize:14,external_system_dbFontFamily:`
24. , sans-serif`,external_system_dbFontWeight:`normal`,system_queueFontSize:14,system_queueFontFamily:`
25. , sans-serif`,system_queueFontWeight:`normal`,external_system_queueFontSize:14,external_system_queueFontFamily:`
26. , sans-serif`,external_system_queueFontWeight:`normal`,boundaryFontSize:14,boundaryFontFamily:`
27. , sans-serif`,boundaryFontWeight:`normal`,messageFontSize:12,messageFontFamily:`
28. , sans-serif`,messageFontWeight:`normal`,containerFontSize:14,containerFontFamily:`
29. , sans-serif`,containerFontWeight:`normal`,external_containerFontSize:14,external_containerFontFamily:`
30. , sans-serif`,external_containerFontWeight:`normal`,container_dbFontSize:14,container_dbFontFamily:`
31. , sans-serif`,container_dbFontWeight:`normal`,external_container_dbFontSize:14,external_container_dbFontFamily:`
32. , sans-serif`,external_container_dbFontWeight:`normal`,container_queueFontSize:14,container_queueFontFamily:`
33. , sans-serif`,container_queueFontWeight:`normal`,external_container_queueFontSize:14,external_container_queueFontFamily:`
34. , sans-serif`,external_container_queueFontWeight:`normal`,componentFontSize:14,componentFontFamily:`
35. , sans-serif`,componentFontWeight:`normal`,external_componentFontSize:14,external_componentFontFamily:`
36. , sans-serif`,external_componentFontWeight:`normal`,component_dbFontSize:14,component_dbFontFamily:`
37. , sans-serif`,component_dbFontWeight:`normal`,external_component_dbFontSize:14,external_component_dbFontFamily:`
38. , sans-serif`,external_component_dbFontWeight:`normal`,component_queueFontSize:14,component_queueFontFamily:`
39. , sans-serif`,component_queueFontWeight:`normal`,external_component_queueFontSize:14,external_component_queueFontFamily:`
40. display: flex; align-items: center; justify-content: center; white-space: nowrap;
41. property with non-empty string value.`);if(H.debug(`Registering icon pack:`,t.name),`loader`in t)MU.set(t.name,t.loader);else if(`icons`in t)jU.set(t.name,t.icons);else throw H.error(`Invalid icon loader:`,t),Error(`Invalid icon loader. Must have either
42. :`typedoc src/defaultConfig.ts src/config.ts src/mermaid.ts && prettier --write ./src/docs/config/setup`,
43. :`rimraf ../../docs && pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts`,
44. :`pnpm docs:code && pnpm docs:spellcheck && tsx scripts/docs.cli.mts --verify`,
45. :`pnpm --filter ./src/docs prefetch && rimraf src/vitepress && pnpm docs:code && tsx scripts/docs.cli.mts --vitepress && pnpm --filter ./src/vitepress install --no-frozen-lockfile --ignore-scripts`,
46. :`pnpm docs:pre:vitepress && (cd src/vitepress && pnpm run build) && cpy --flat src/docs/landing/ ./src/vitepress/.vitepress/dist/landing`,
47. :`pnpm docs:pre:vitepress && concurrently
48. tsx scripts/docs.cli.mts --watch --vitepress
49. :`pnpm docs:build:vitepress && vitepress serve src/vitepress`,
50. :`tsx scripts/update-release-version.mts`,
51. :`tsx scripts/update-release-version.mts --verify`,
52. :`tsx scripts/create-types-from-json-schema.mts`,
53. `+jX.escape(uZ(this.classes))+`
54. `),this.attributes)if(this.attributes.hasOwnProperty(i)){if(WUe.test(i))throw new kX(`Invalid attribute name '`+i+`'`);t+=` `+i+`=
55. `+jX.escape(YX[this.pathName])+`
56. `+jX.escape(this.attributes[t])+`
57. `);if(parseInt(r.text)!==a+1)throw new kX(`Argument number
58. used in math mode`,e):this.settings.reportNonstrict(`unknownSymbol`,`Unrecognized Unicode character
59. ` for `options.bulletOrdered`, expected `.` or `)`
60. ` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`
61. Cannot serialize rules with repetition `
62. ` for `options.ruleRepetition`, expected `3` or more
63. ` in a splice buffer of size `
64. +D2({start:t.start,end:t.end})+`) is open`):Error(
65. argument must be of type string or an instance of URL. Received `'+e+
66. );if(e.includes(`.`,1))throw Error(
67. ` cannot be a path: did not expect `
68. ` requires `path` to be set too
69. `done` is defined if `resolve` is not
70. ` on a frozen processor. Create a new processor first, by calling it: use `processor()` instead of `processor`.
71. :`.chat-detail-content`,done:!e.chatting,
72. A lite version of Rive's canvas based web api.
73. :`top left`,bottom:`top center`,
74. :`bottom left`,top:`bottom center`,
75. :`top left`,right:`center left`,
76. :`top right`,left:`center right`,
77. :`bottom left`,bottom:`bottom center`,
78. :`top right`,right:`center right`,
79. :`top left`,left:`center left`,
80. :`true`,tabindex:t?`0`:`-1`,ref:`focusableStartRef`,style:n,onFocus:this.handleStartFocus}),e(),R(`div`,{
81. --n-scrollbar-rail-top-horizontal-top
82. --n-scrollbar-rail-right-horizontal-top
83. --n-scrollbar-rail-bottom-horizontal-top
84. --n-scrollbar-rail-left-horizontal-top
85. --n-scrollbar-rail-top-horizontal-bottom
86. --n-scrollbar-rail-right-horizontal-bottom
87. --n-scrollbar-rail-bottom-horizontal-bottom
88. --n-scrollbar-rail-left-horizontal-bottom
89. --n-scrollbar-rail-top-vertical-right
90. --n-scrollbar-rail-right-vertical-right
91. --n-scrollbar-rail-bottom-vertical-right
92. --n-scrollbar-rail-left-vertical-right
93. --n-scrollbar-rail-top-vertical-left
94. --n-scrollbar-rail-right-vertical-left
95. --n-scrollbar-rail-bottom-vertical-left
96. --n-scrollbar-rail-left-vertical-left
97. :e.showArrow,disabled:e.disabled,
98. :!1,disabled:!e.chunkDetail?.snippet,style:{boxShadow:`none`},
99. :n.value?`no-chatting-animate`:``,content:e.data.content.value.content||e.data.error?.localizedMessage?.message||``,
100. :!!r.value,chatting:e.chatting,
101. :i.value.kimiPlus&&i.value.kimiPlus.specialId===`coze`,
102. :r,segment:i.value,index:e.index,
103. :e.showThinking,chatting:a.value,
104. :s.value.role===M(n6).assistant,mobile:M(a)}])},[!e.isScreenshot&&!e.shareMode?(N(),P(Ii,{key:0},[M(a)?(N(),P(`div`,$7e,[s.value.role===M(n6).assistant?(N(),Gi(g6,{key:0,role:s.value.role,
105. :e.currentRag?e.currentRag:null,chatting:e.chatting??!1,
106. To begin, I'll load the dataset you've provided to understand its structure and contents. This initial step is crucial for planning the subsequent analysis of how the remote-work ratio affects salary across different experience levels.
107. /tmp/ipykernel_10/142833426.py:14: UserWarning: The palette list has more values (5) than needed (3), which may not be intended.\\n sns.violinplot(x='experience_level', y='salary_in_usd', hue='remote_ratio', data=df, split=True, inner='quartile', palette=pastel)\
108. /tmp/ipykernel_10/1490929078.py:6: UserWarning: The palette list has more values (5) than needed (3), which may not be intended.\\n sns.boxplot(x='experience_level', y='salary_in_usd', hue='remote_cat', data=df, palette=pastel)\
109. Overall two-way ANOVA F-statistic: nan, p-value: nan\\n/tmp/ipykernel_10/3418948584.py:11: SmallSampleWarning: One or more sample arguments is too small; all returned values will be NaN. See documentation for sample size requirements.\\n f_stat, p_val = f_oneway(*groups)\
110. # Calculate mean salary by group\\nmean_salary = df.groupby(['experience_level','remote_cat'])['salary_in_usd'].mean().unstack()\\nmean_salary\
111. # Plot interaction plot\\nmean_salary.T.plot(kind='bar', figsize=(10,6), color=pastel[:4])\\nplt.title('Interaction Plot: Mean Salary by Remote Category and Experience Level')\\nplt.xlabel('Remote Category')\\nplt.ylabel('Mean Salary (USD)')\\nplt.legend(title='Experience Level')\\nplt.tight_layout()\\nplt.show()\
112. # Calculate percentage difference between remote and on-site\\nmean_salary['pct_diff'] = (mean_salary['Remote'] - mean_salary['On-site']) / mean_salary['On-site'] * 100\\nmean_salary['pct_diff']\
113. # Summary table\\nsummary = pd.DataFrame({\\n 'Mean On-site Salary (USD)': mean_salary['On-site'],\\n 'Mean Remote Salary (USD)': mean_salary['Remote'],\\n '% Difference (Remote - On-site)': mean_salary['pct_diff']\\n}).round(2)\\nsummary\
114. I'll create a comprehensive webpage that presents the statistical analysis and includes a personal simulator. Let me build this with an attractive, professional design using a harmonious color palette.
115. Let me fix the HTML content and create a proper webpage:
116. File saved as: remote_work_analysis.html\\\
117. - Executive summary with key statistics\\\
118. - Professional design with harmonious color palette\\\
119. HTML webpage created successfully!\\nFile saved as: remote_work_analysis.html\\n\\nThe webpage includes:\\n- Executive summary with key statistics\\n- Statistical analysis process\\n- Visual analysis sections\\n- Interactive remote work simulator\\n- Professional design with harmonious color palette\
120. piece that combines rich, accurate academic information with impressive visual effects and smooth interactive experience.\n\nThis prompt covers the depth of information gathering, aesthetic appeal of web design, and richness of interactions, with special emphasis on the importance of relationship graph visualization.
121. I'll help you create a comprehensive interactive visualization website for Stanford NLP Lab's academic genealogy. Let me start by gathering detailed information about the lab's current professors, their students, and career paths.
122. Stanford NLP Group current professors faculty 2024\
123. Stanford Natural Language Processing Group faculty members\
124. Stanford NLP professors PhD students graduated\
125. Let me find Christopher Manning's PhD graduates page:
126. Let me click on the Ph.D. graduates link to see his students:
127. Perfect! Let me scroll down to see more of Manning's PhD students:
128. Let me search for Dan Jurafsky's page and his PhD students:
129. Dan Jurafsky Stanford PhD students graduated\
130. , and co-created with Chris Manning one of the first massively open online courses, Stanford's course in Natural Language Processing. His trade book \\\
131. Stanford NLP Group Percy Liang PhD students\
132. Stanford Chris Potts PhD students graduated\
133. Danqi Chen PhD Stanford career trajectory\
134. Richard Socher Stanford PhD students career paths\
135. Stanford NLP graduates where are they now\
136. Stanford NLP PhD placement academia industry statistics\
137. Stanford computational linguistics graduates careers\
138. Stanford NLP group alumni network\
139. Based on my research, I now have comprehensive information to create the interactive visualization. Let me start by creating a structured data file with all the information I've gathered, and then build the interactive website.
140. /workspace/stanford_nlp_data.json\
141. Thomas M. Siebel Professor in Machine Learning\\\
142. American Academy of Arts and Sciences (2025)\\\
143. Ergativity: Argument Structure and Grammatical Relations\\\
144. Alignment and Adjacency in Optimality Theory: Evidence from Warlpiri and Arrernte\\\
145. Personalized Search in Self-Organizing Data Networks\\\
146. The Unsupervised Learning of Natural Language Structure\\\
147. Effective Statistical Models for Syntactic and Semantic Disambiguation\\\
148. Probabilistic Models of Word Order and Syntactic Discontinuity\\\
149. Improving Chinese-English Machine Translation through Better Source-side Linguistic Processing\\\
150. Holistic Language Processing: Joint Models of Linguistic Structure\\\
151. Studying People, Organization, and the Web with Statistical Text Models\\\
152. Processing Short Message Communications in Low-Resource Languages\\\
153. What's That Supposed to Mean? Modeling the Pragmatic Meaning of Utterances\\\
154. Designing Visual Text Analysis Methods to Support Sensemaking and Modeling\\\
155. Bilingual and Cross-Lingual Learning of Sequence Models with Bitext\\\
156. Recursive Deep Learning for Natural Language Processing and Computer Vision\\\
157. Mixed-Initiative Natural Language Translation\\\
158. Distantly Supervised Information Extraction Using Bootstrapped Patterns\\\
159. Text to 3D Scene Generation\\\
160. Assistant Professor, Simon Fraser University\\\
161. Learning Open Domain Knowledge from Text\\\
162. Modeling Natural Language Semantics in Learned Representations\\\
163. Designing Syntactic Representations for NLP: An Empirical Investigation\\\
164. Senior Staff Research Scientist, Google DeepMind\\\
165. Learning Adaptive Language Interfaces Through Interaction\\\
166. Neural Reading Comprehension and Beyond\\\
167. Explainable and Efficient Knowledge Acquisition from Text\\\
168. Senior Research Scientist, Salesforce Research\\\
169. Deep Understanding and Generation of Medical Text and Beyond\\\
170. Assistant Professor, UC San Diego\\\
171. Efficient and Scalable Transfer Learning for Natural Language Processing\\\
172. Neural Generation of Open-Ended Text and Dialogue\\\
173. Neural Systems for Informative Conversations\\\
174. Project Recon: A Computational Framework for and Analysis of the California Parole Hearing System\\\
175. Understanding Language Models through Discovery and by Design\\\
176. Professor and Chair of Linguistics\\\
177. Structure and Meaning in Literary Text: A Computational Approach\\\
178. Social Power in Natural Language\\\
179. Alfred P. Sloan Research Fellowship\\\
180. Robustness and Interpretability in Natural Language Processing\\\
181. Understanding and Improving Machine Learning Models\\\
182. Assistant Professor, University of Washington\\\
183. Linguistic Society of America Fellow\\\
184. Understanding Neural Networks via Causal Abstraction\\\
185. Social Intelligence in Language Models\\\
186. Alignment and Adjacency in Optimality Theory\\\
187. Improving Chinese-English Machine Translation\\\
188. Modeling the Pragmatic Meaning of Utterances\\\
189. Designing Visual Text Analysis Methods\\\
190. Bilingual and Cross-Lingual Learning of Sequence Models\\\
191. Recursive Deep Learning for NLP and Computer Vision\\\
192. Designing Syntactic Representations for NLP\\\
193. Deep Understanding and Generation of Medical Text\\\
194. Efficient and Scalable Transfer Learning for NLP\\\
195. Project Recon: Computational Framework for Parole Hearings\\\
196. Structure and Meaning in Literary Text\\\
197. Robustness and Interpretability in NLP\\\
198. Understanding and Improving ML Models\\\
199. Now I'll create the interactive visualization website with modern design, dark theme, neon effects, and all the requested features. Let me start with the main HTML file:
200. File created successfully at: /workspace/index.html\
201. Let me check the deployment and fix any issues by testing the URL:
202. Great! The website is deployed successfully. Let me also create a comprehensive README file to document the project:
203. File created successfully at: /workspace/README.md\
204. Interactive visualization of Stanford NLP Lab's academic genealogy featuring professor-student relationships, career trajectories, and comprehensive analytics\
205. Bad Request: No valid session ID provided
206. Let me try a different approach and create a final enhanced version with some additional features:
207. Let me update the index.html to include the enhanced features:
208. Perfect! Let me also get the public URL for the deployment:
209. I'll help you plan your Coldplay 2025 tour trip! Let me start by gathering the necessary information and checking your calendar availability.
210. Let me search for Coldplay's 2025 tour information and check your email for any existing concert-related communications:
211. Let me try a different approach to find Coldplay's 2025 tour information:
212. Let me search for Coldplay's 2025 tour information using a different approach:
213. Let me check your Gmail for any existing concert-related emails and then check your calendar availability:
214. Search for emails related to Coldplay concerts, tour dates, or music events in 2025\
215. Coldplay OR concert OR tour OR music event 2025\
216. AI Agenda: Two State AI Laws to Watch\\\
217. Creator Economy: TikTok, Instagram Could Worsen Streaming TVâs Advertising Glut\\\
218. Creator Economy: A New Talent Firm Wants to Make Hit Creator Shows\\\
219. Creator Economy: The One Feature Top Podcasters Want Spotify to Bring Back\\\
220. Creator Economy: Why Creators Are Inking More FAST Channel Deals\\\
221. Applied AI: PGA Eyes AI Voice Announcers for Golf App\\\
222. Creator Economy: Nylon Launches Creator Membership Program, Paid by Advertisers\\\
223. Creator Economy: The Italian Embassy Tries Influencer Diplomacy\\\
224. Search for emails related to Coldplay concerts, tour dates, or music events in 2025\\\
225. Coldplay OR concert OR tour OR music event 2025\\\
226. Check for events on August 22, 2025 and other potential Coldplay concert dates to ensure availability\
227. Check for events on August 22, 2025 and other potential Coldplay concert dates to ensure availability\\\
228. Coldplay OR concert OR music\\\
229. transport error: request failed with status 500: {\
230. an internal error has occurred. Please retry.\
231. Since you're departing from London and the recommended concert is at Wembley Stadium (which is in London), no flights are needed! Let me search for Airbnb accommodations near Wembley Stadium:
232. Let me search for restaurants near Wembley Stadium for your concert experience:
233. Designer outlet Unit 23 Lakeside Way Wembley, Park, London HA9 0TG, UK\\\
234. Excellent rating of 4.7/5 with 101 reviews. Well-suited for celebration. Currently open.\\\
235. High rating of 4.3/5 with 1783 reviews. Well-suited for celebration. Excellent match for fun mood. Moderately priced. Currently open.\\\
236. 10 Exhibition Way, Wembley Park, London, Wembley HA9 0FU, UK\\\
237. Excellent rating of 4.6/5 with 1771 reviews. Well-suited for celebration. Moderately priced. Currently open.\\\
238. google_calendar_create_detailed_event:9
239. google_calendar_create_detailed_event
240. Create a detailed calendar event for Coldplay 2025 concert at Wembley Stadium on August 22, 2025, including preparation timeline and important reminders\
241. ðµ Coldplay Music of the Spheres Tour - Wembley Stadium\
242. ðµ Coldplay Music of the Spheres Tour - Wembley Stadium\\\
243. Create a detailed calendar event for Coldplay 2025 concert at Wembley Stadium on August 22, 2025, including preparation timeline and important reminders\\\
244. Send a comprehensive Coldplay 2025 tour planning report with detailed budget breakdown, timeline, and visual elements to zhoujianren@moonshot.cn\
245. ðµ Complete Coldplay 2025 Tour Planning Report - Budget Breakdown & Timeline\
246. Send a comprehensive Coldplay 2025 tour planning report with detailed budget breakdown, timeline, and visual elements to zhoujianren@moonshot.cn\\\
247. width=device-width, initial-scale=1.0
248. vertical-align:middle;margin-right:4px
249. Thomas M. Siebel Professor in Machine Learning
250. American Academy of Arts and Sciences (2025)
251. Professor and Chair of Linguistics
252. Alfred P. Sloan Research Fellowship
253. , }, ], }, ], statistics: { total_professors: 4, total_phd_students: 45, industry_placement: 28, academia_placement: 17, placement_ratio: { industry: 62.2, academia: 37.8, }, geographic_distribution: { USA: 43, Canada: 2, }, top_companies: [ { name:
254. , { particles: { number: { value: 80, density: { enable: true, value_area: 800, }, }, color: { value: [
255. , }, opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false, }, }, size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false, }, }, line_linked: { enable: true, distance: 150, color:
256. , opacity: 0.2, width: 1, }, move: { enable: true, speed: 1, direction:
257. , random: true, straight: false, out_mode:
258. , bounce: false, }, }, interactivity: { detect_on:
259. , events: { onhover: { enable: true, mode:
260. , }, resize: true, }, }, retina_detect: true, }); } } setupNavigation() { // Smooth scrolling document.querySelectorAll('a[href^=
261. ) ); if (target) { target.scrollIntoView({ behavior:
262. }); } }); }); // Active navigation highlighting window.addEventListener(
263. ); icon.className = document.body.classList.contains(
264. ); // Animate numbers if (entry.target.classList.contains(
265. )) { this.animateNumber(entry.target); } } }); }, observerOptions); document.querySelectorAll(
266. ], avoidLabelOverlap: false, itemStyle: { borderRadius: 10, borderColor:
267. , borderWidth: 2, }, label: { show: false, position:
268. , }, emphasis: { label: { show: true, fontSize: 20, fontWeight:
269. }, }, ], }, ], }; chart.setOption(option); window.addEventListener(
270. , width: 3 }, areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ { offset: 0, color:
271. }, }, ], }; chart.setOption(option); window.addEventListener(
272. , itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [ { offset: 0, color:
273. }, ]), }, }, ], }; chart.setOption(option); window.addEventListener(
274. , right: null, bottom: null, sizeRange: [12, 50], rotationRange: [-45, 45], rotationStep: 45, gridSize: 8, drawOutOfBound: false, textStyle: { fontFamily:
275. , option); chart.setOption(option); window.addEventListener(
276. , d3.forceCenter(width / 2, height / 2)) .force(
277. ).remove(); } showNodeDetail(node) { // Implementation for showing detailed node information console.log(
278. ; if (isVisible) { card.classList.add(
279. ); if (loading) { loading.style.opacity =
280. ; } // Modal close functionality document.addEventListener(
281. ); if (modal) modal.style.display =
282. ; } }); // Initialize the application document.addEventListener(
283. ); if (searchInput) searchInput.focus(); } // Arrow keys for navigation if (e.key ===
284. ) { this.handleArrowNavigation(e); } // Number keys for quick navigation if (e.key >=
285. ); progressBar.style.cssText = \` position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #00d4ff, #a855f7); z-index: 9999; transition: width 0.3s ease; \`; document.body.appendChild(progressBar); window.addEventListener(
286. ); } else if (btn.classList.contains(
287. ); enhancedStyleSheet.textContent = enhancedStyles; document.head.appendChild(enhancedStyleSheet); // Initialize enhanced features document.addEventListener(
288. :r.includes(c.model)&&u(c.value)===n.openSourceTopScore,
289. `,[_D.INVALID_TOKEN_IN_PLACEHOLDER]:`Invalid token in placeholder:
290. `,[_D.UNHANDLED_CODEGEN_NODE_TYPE]:`unhandled codegen node type:
291. `,[_D.UNHANDLED_MINIFIER_NODE_TYPE]:`unhandled mimifier node type:
292. locale messages.`,[rO.FALLBACK_TO_TRANSLATE]:`Fall back to translate
293. locale.`,[rO.CANNOT_FORMAT_NUMBER]:`Cannot format a number value due to not supported Intl.NumberFormat.`,[rO.FALLBACK_TO_NUMBER_FORMAT]:`Fall back to number format
294. locale.`,[rO.CANNOT_FORMAT_DATE]:`Cannot format a date value due to not supported Intl.DateTimeFormat.`,[rO.FALLBACK_TO_DATE_FORMAT]:`Fall back to datetime format
295. with root locale.`,[HO.NOT_FOUND_PARENT_SCOPE]:`Not found parent scope. use the global scope.`,[HO.IGNORE_OBJ_FLATTEN]:`Ignore object flatten:
296. has been deprecated in v11. Use translate APIs (
297. ])))\S[\s\S]*(?=$)/,lookbehind:!0,alias:[n,`language-`+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:`attr-equals`},/"|
298. [ ](?:.*[ ])*?;/,alias:`nowdoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<<
299. /,alias:`single-quoted-string`,greedy:!0},{pattern:/"(?:\[\s\S]|[^\"])*"/,alias:`double-quoted-string`,greedy:!0,inside:{interpolation:o}}];e.languages.insertBefore(`php`,`variable`,{string:s,attribute:{pattern:/#\[(?:[^"
300. [ ](?:.*[ ])*?[ ]*/i,alias:`heredoc-string`,greedy:!0,inside:{delimiter:{pattern:/^<<[-~]?
