/* Session 2 speaker notes, keyed by slide id. Plain HTML; shown in notes.html. */
window.NOTES = {
  cover: { time: '1′', html: `
<p>«هفته‌ی پیش ایده را دیدیم. امروز درِ جعبه را باز می‌کنیم: engine، خط به خط، با کد واقعی ComposeCleanArch.»</p>
<p>سریع رد شوید؛ اسلاید بعد مهم است.</p>` },

  asked: { time: '2′', html: `
<p>«هفته‌ی پیش سؤال‌های خیلی خوبی پرسیدید. امروز را دقیقاً بر اساس همان‌ها چیده‌ام.»</p>
<p>→ engine چطور کار می‌کند · → این همه request؟ · → payload · → query state و UI state.</p>
<p>→ «به هر چهار جواب می‌دهیم، و جایی هم که engine کاری را نمی‌کند، صادقانه می‌گویم.» <b>این جمله اعتماد می‌سازد؛ بگویید.</b></p>` },

  recap1: { time: '1′', html: `
<p>→ screen با key می‌پرسد → QueryClient، یک map → یک جعبه برای هر key → سرور، فقط وقتی لازم است.</p>
<p>→ «امروز "لازم" را دقیق تعریف می‌کنیم. همه‌اش در یک فایل است، حدود ۳۰۰ خط.»</p>` },

  anatomy: { time: '3′', html: `
<p>با هر → یک خط روشن می‌شود و کارتش کنارش.</p>
<ol><li><b>state:</b> «چیزی که screen می‌بیند. StateFlow؛ هر تغییر به همه‌ی screenهای این key می‌رسد.»</li>
<li><b>lastFetch:</b> «کِی data رسید. با staleTime مقایسه می‌شود.»</li>
<li><b>observers:</b> «چند screen نگاه می‌کنند. ۰ یعنی تایمر cacheTime.»</li>
<li><b>inFlight:</b> «request ی که در راه است. اگر هست، دومی نمی‌رود.»</li>
<li><b>latestEpoch:</b> «شماره‌ی هر fetch. جواب با شماره‌ی قدیمی دور ریخته می‌شود.»</li>
<li><b>intervalJob:</b> «حلقه‌ی polling؛ یکی برای کل جعبه.»</li>
<li>→ «چرا همه Atomic؟ main، IO و polling همزمان دست می‌زنند.»</li></ol>
<p>«هر کدام از این شش فیلد یک اسلاید امروز است.»</p>` },

  machine: { time: '3′', html: `
<p>شش انتقال، یکی‌یکی. مهم‌ترین‌ها:</p>
<ul><li>→۲ «refetch شروع شد: data ی قبلی می‌ماند، فقط <b>refreshing = true</b>. spinner تمام‌صفحه نه.»</li>
<li>→۴ «refetch شکست خورد: باز Success با data ی قبلی. error نه.» (اسلاید ۱۸ کامل.)</li>
<li>→۵ «Failure فقط وقتی هیچ data ای نداریم و retryها تمام شد.»</li></ul>
<p>→ جمله‌ی پایین را بخوانید: «spinner تمام‌صفحه فقط یک بار.»</p>` },

  decide: { time: '3′', html: `
<p>«هر بار که کسی fetch صدا می‌زند، جعبه سه سؤال می‌پرسد.»</p>
<p>→۱ «request در راه است؟ همان را صبر کن.» → ۲ «fresh است؟ همان را بده.» → ۳ «وگرنه یک request با epoch جدید.»</p>
<p>→ «force = true، یعنی invalidate، pull-to-refresh و polling، از دو سؤال اول رد می‌شود.»</p>
<p>بگویید کد ساده‌شده است. در کد واقعی compareAndSet هست؛ اسلاید ۱۰.</p>` },

  triggers: { time: '3′', html: `
<p><b>این اسلاید جواب «این همه request» است. آهسته بروید.</b></p>
<p>→ اولین observer + خالی/stale · → invalidate، فقط اگر کسی نگاه می‌کند · → دستی · → interval، فقط روی صفحه.</p>
<p>→ «همه‌ی چیزهای دیگر صفر request.» بپرسید: «recomposition چند request می‌زند؟» (صفر.)</p>
<p>نکته‌ی ظریف: screen دوم با همان key، حتی اگر data stale باشد، fetch نمی‌کند؛ چون فقط <b>اولین</b> observer fetch را شروع می‌کند.</p>` },

  stale: { time: '3′', html: `
<p>شمارنده‌ی بالا با هر → عوض می‌شود.</p>
<p>→ «دقیقه‌ی ۰، Dashboard: جعبه خالی، ۱ request.» → «دقیقه‌ی ۲، Wallet، همان key: fresh، صفر.» → «چرخش: صفر.» → «دقیقه‌ی ۷: stale، ۱ request، و دوباره ۵ دقیقه fresh.»</p>
<p>→ «بین ۵ و ۷ data کهنه بود و هیچ request ی نرفت. stale یعنی "دفعه‌ی بعد بپرس"، نه "الان بپرس".»</p>` },

  observers: { time: '3′', html: `
<p>شمارنده‌ی observers و وضعیت جعبه با هر → عوض می‌شوند.</p>
<p>→ A باز شد: ۱، fetch · → B: ۲، fetch نه · → A رفت: ۱ · → B رفت: ۰، تایمر ۱۰ دقیقه · → B برگشت: تایمر لغو، data فوراً · → ۱۰ دقیقه کسی نیامد: از map حذف.</p>
<p>«staleTime می‌گوید کِی دوباره بپرسیم. cacheTime می‌گوید کِی دور بریزیم. دو چیز جدا.»</p>` },

  dedup: { time: '2′', html: `
<p>→ سه screen همزمان fetch می‌خواهند · → اولی slot را می‌گیرد، دو تای دیگر صبر · → یک request.</p>
<p>→ کد: «compareAndSet اتمی است؛ فقط یک نفر برنده می‌شود.» → «و test ی داریم که این را روی thread های واقعی چک می‌کند.»</p>
<p>جواب تمرین هفته‌ی پیش: «دو screen با useHeadlines("techcrunch") = یک request.»</p>` },

  path: { time: '3′', html: `
<p>ردیف به ردیف. قبل از هر ردیف بپرسید: <b>«چند request؟»</b> بعد → بزنید.</p>
<p>ردیف ۴: «Buy هم موجودی را نشان می‌دهد، پس جعبه observer دارد و invalidate همان لحظه refetch می‌کند.»</p>
<p>→ «کل مسیر: ۴. هر request یک دلیل دارد: خالی، stale، یا می‌دانیم عوض شده.»</p>` },

  choose: { time: '3′', html: `
<p>«حالا سؤال "data مدام عوض می‌شود".»</p>
<p>→ قیمت: polling یا push · → موجودی: ۳۰ ثانیه + invalidate · → feed: پیش‌فرض · → پروفایل: OfflineForever.</p>
<p>→ «سؤال درست: چقدر کهنه بودن برای کاربر اشکال دارد؟» این را با product تصمیم بگیرید، نه در code review.</p>` },

  polling: { time: '2′', html: `
<p>→۱ «فقط وقتی STARTED است. background صفر request.» → ۲ «سه screen، یک حلقه.» → ۳ «اگر قبلی هنوز در راه است، tick رد می‌شود.»</p>
<p>→ «و با رفتن آخرین screen، حلقه تمام می‌شود.»</p>
<p>اگر پرسیدند چرا tick را رد می‌کنیم و force نمی‌کنیم: force fetch قبلی را cancel می‌کند؛ روی شبکه‌ی کند هر بار cancel می‌شد و data هیچ‌وقت نمی‌رسید.</p>` },

  push: { time: '3′', html: `
<p>«بعضی‌ها گفتید polling برای data زنده اشتباه است. درست می‌گویید؛ گاهی.»</p>
<p>→ polling کافی است وقتی... → push لازم است وقتی...</p>
<p>→ کد: «socket مستقیم در جعبه می‌نویسد.» → «screen فرقی نمی‌فهمد؛ epoch جلو می‌رود؛ بعد از reconnect یک invalidate.»</p>
<p>محدودیت: setData فقط جعبه‌ای را که وجود دارد پر می‌کند (اگر هیچ screen ی آن key را نساخته، کاری نمی‌کند).</p>` },

  payload: { time: '2′', html: `
<p>«engine تعداد request را کم می‌کند، نه حجم هر جواب را. حجم جواب طراحی API است.»</p>
<p>→ engine · → صفحه‌بندی · → خلاصه و جزئیات · → ETag/304 در OkHttp (الان در ComposeCleanArch تنظیم نشده؛ می‌شود اضافه کرد).</p>
<p>→ حافظه: «فقط جعبه‌های زنده، به‌علاوه‌ی cacheTime.»</p>` },

  race: { time: '3′', html: `
<p>جعبه‌ی بالا با هر → مقدارش عوض می‌شود.</p>
<p>→۱ fetch #1، شبکه کند · →۲ خرید، invalidate، fetch #2؛ #1 cancel می‌شود · →۳ #2 رسید: 1,230 · →۴ «ولی اگر جواب #1 با این حال برسد؟ بدون epoch، 1,250 برنده می‌شد؛ کاربر موجودی قبل از خرید را می‌دید.» · →۵ «با epoch: ۱ ≠ ۲، دور ریخته شد.»</p>
<p>«cancel کافی نیست؛ fetcher ممکن است cancellation را چک نکند. epoch قفل دوم است.»</p>` },

  retry: { time: '2′', html: `
<p>→ موقت: retry · → 4xx: هرگز · → read: ۳ تلاش، ۱ و ۲ ثانیه · → write: پیش‌فرض بدون retry.</p>
<p>«چرا write نه؟ اگر سرور خرید را انجام داد ولی جواب گم شد، retry یعنی خرید دوم.»</p>` },

  failure: { time: '2′', html: `
<p>→ «بار اول شکست: هیچ data ای نداریم، پس Failure و دکمه‌ی Retry.» → «refetch شکست: data داریم، همان را نگه می‌داریم.» → کد · → «کمی کهنه بهتر از خالی.»</p>
<p>اگر پرسیدند «کاربر نمی‌فهمد refresh نشد؟» درست است؛ engine امروز این را اعلام نمی‌کند. راهنما، فصل ۱۷.</p>` },

  mutation: { time: '2′', html: `
<p>→ single-flight: «دو tap، یک خرید.» → rememberUpdatedState: «آخرین lambda، نه closure کهنه.» → ترتیب: «اول موفقیت، بعد invalidate، بعد onSuccess.»</p>` },

  owners: { time: '3′', html: `
<p><b>جواب سؤال «query state و UI state کنار هم».</b></p>
<p>→ query state، صاحبش جعبه · → UI state، صاحبش screen (یا ViewModel وقتی منطق دارد).</p>
<p>→ قانون را بخوانید: «هر state یک صاحب.» → «و به دو شکل وصل می‌شوند: بخشی از key، یا مقدار اولیه‌ی فرم. دو اسلاید بعد همین دو.»</p>` },

  filter: { time: '3′', html: `
<p>→ filter و page با rememberSaveable · → «هر ترکیب یک جعبه» · → «برگشت به تب Open: صفر request» · → enabled برای search.</p>
<p>بپرسید: «کاربر بین دو تب ده بار جابه‌جا شود، چند request؟» (۲، تا وقتی fresh هستند.)</p>` },

  form: { time: '3′', html: `
<p>→ «مقدار اولیه از جعبه.» → <b>«key ی remember برابر p.id است، نه p.»</b> بپرسید: «اگر p بود چه می‌شد؟» (هر refetch متن کاربر را پاک می‌کرد.) → submit · → «فرم پیچیده = ViewModel برای UI state. جلسه‌ی ۳.»</p>` },

  loading: { time: '2′', html: `
<p>→ Loading: اولین بار · → Success(refreshing): data + یک نوار باریک · → isManualRefetch: spinner ی pull-to-refresh.</p>
<p>→ کد: «QueryContent برای حالت، PullToRefreshBox برای pull.»</p>` },

  testing: { time: '2′', html: `
<p>«همه‌ی این قول‌ها را چطور ثابت کنیم؟ engine کاتلین خالص است.»</p>
<p>→ ساعت inject می‌شود · → dispatcher inject می‌شود · → اجرا.</p>
<p>اختیاری: اگر وقت هست، <code>./gradlew :core:query:test</code> را زنده اجرا کنید.</p>` },

  guarantees: { time: '2′', html: `
<p>→ cache و dedup · → retry و Room · → polling و evict.</p>
<p>→ <b>«و دو قول test ندارند.»</b> صادقانه بگویید؛ همین تمرین این هفته است.</p>` },

  limits: { time: '2′', html: `
<p>شش کارت، یکی‌یکی. برای مهندس‌ها این اسلاید اعتماد می‌سازد.</p>
<p>→ «هر کدام چند خط است، ولی فقط وقتی واقعاً لازم شد.»</p>` },

  recap: { time: '2′', html: `
<p>«چهار سؤال هفته‌ی پیش، چهار جواب.» هر → یکی.</p>` },

  next: { time: '1′', html: `
<p>«جلسه‌ی بعد با هم می‌سازیم: معماری کامل، جای ViewModel، و یک feature از صفر.»</p>
<p>→ تمرین: QueryEntry.kt کامل، و یکی از دو test.</p>` },

  thanks: { time: '—', html: `
<p>سؤال‌ها. جواب‌های آماده در پیوست راهنما. اگر جواب را نمی‌دانید: «در کد چک می‌کنم و جلسه‌ی بعد جواب می‌دهم.»</p>` },
};
