/* Speaker notes, keyed by slide id. Plain HTML; shown in notes.html. */
window.NOTES = {
  cover: { time: '1′', html: `
<p>سلام. امروز یک معماری را درس می‌دهم که ایده‌اش از React Query می‌آید و ما آن را برای Jetpack Compose ساختیم. نسخه‌ی تمیز و tested آن در ComposeCleanArch است.</p>
<p>جمله‌ی اصلی: <b>screenها ViewModel ندارند</b>. server data از یک cache مشترک می‌آید.</p>
<p>هدف: از این جلسه به بعد همه با همین الگو feature بنویسیم.</p>` },

  agenda: { time: '1′', html: `
<p>شش بخش: اول اینکه ایده از کجا آمد — React Query. بعد مشکل در اندروید، بعد همان ایده در Compose، بعد engine با چند simulator زنده.</p>
<p>بعد trapهایی که یک نسخه‌ی ساده دارد، و آخر اینکه از فردا چطور بنویسیم، با یک تمرین. سؤال‌ها را وسط هم بپرسید.</p>` },

  destination: { time: '1.5′', html: `
<p>این جمله را آرام بخوانید؛ آخر جلسه همین را تکرار می‌کنیم.</p>
<p>بعد سه کارت را معرفی کنید: «امروز همه‌چیز درباره‌ی این سه است: یک جعبه برای هر data، یک اسم برای هر جعبه (key)، و یک map که همه‌ی جعبه‌ها را نگه می‌دارد (QueryClient).»</p>
<p>«هر چیز دیگری که امروز می‌بینید — staleTime، retry، invalidate — فقط یک قانون درباره‌ی همین جعبه است.»</p>` },

  'sec-react': { time: '0.5′', html: `
<p>قبل از هر خط کد اندرویدی، از وب شروع می‌کنیم. بپرسید: «چند نفر با React یا React Query کار کرده‌اند؟» اگر کسی هست، یک جمله از تجربه‌اش بگوید.</p>` },

  'react-origin': { time: '2′', html: `
<p>تا حدود ۲۰۱۹ بیشتر اپ‌های React server data را در Redux نگه می‌داشتند. برای هر request سه action، یک reducer با isLoading و error، و یک useEffect.</p>
<p>بپرسید: «آشنا نیست؟» بگذارید خودشان شباهت را بگویند: action + reducer همان UiState + ViewModel است، useEffect همان LaunchedEffect.</p>
<p>مشکل‌ها هم همان است: کد تکراری، stale data، request تکراری، screen‌ای که بعد از ویرایش refetch نمی‌شود.</p>` },

  'react-idea': { time: '2.5′', html: `
<p>Tanner Linsley در ۲۰۱۹ React Query را ساخت؛ امروز اسمش TanStack Query است. بینش اصلی یک جمله است: <b>server data state نیست، cache است.</b></p>
<p>روی دو چیز کد تأکید کنید: queryKey که هویت data است، و invalidateQueries بعد از write.</p>
<p>پنج کاری که cache مرکزی انجام می‌دهد را بخوانید. هر کدام یکی از درس‌های بخش engine است.</p>` },

  'react-why': { time: '2′', html: `
<p>چهار دلیل. اول: Compose همان مدل React است — جدول را بخوانید. hook در Compose طبیعی جا می‌افتد چون remember و DisposableEffect همان ابزارهای React را دارند.</p>
<p>دوم: مشکل یکی است. سوم: Store5 cache را در Repository می‌گذارد و از screen خبر ندارد؛ Apollo فقط GraphQL است.</p>
<p>چهارم: کوچک است — حدود ۸۸۰ خط، بدون dependency، با test. library‌ی React را استفاده نمی‌کنیم؛ فقط ایده و contract را.</p>` },

  'sec-problem': { time: '0.5′', html: `
<p>حالا همان مشکل در اندروید. سؤال از جمع: «آخرین screen‌ای که ساختید، چند خط کد فقط برای loading و error داشت؟»</p>` },

  boilerplate: { time: '3′', html: `
<p>سمت راست همان چیزی است که همه نوشته‌ایم: UiState با سه فیلد، ViewModel با MutableStateFlow، function load، و LaunchedEffect در screen.</p>
<p>سمت چپ همان screen با hook است: یک function به اسم useHeadlines و یک QueryContent. این کد واقعی ComposeCleanArch است.</p>
<p>نکته‌ی مهم پایین اسلاید: نسخه‌ی MVVM با این همه کد هنوز <b>کمتر</b> کار می‌کند — cache ندارد، اگر دو screen همین data را بخواهند دو request می‌زند، و retry ندارد.</p>
<p>یعنی مشکل فقط تعداد خط نیست؛ هر ViewModel یک cache ناقص جدید است.</p>` },

  'two-screens': { time: '2′', html: `
<p>همان ViewModel ساده، دو بار. بپرسید: «اینجا چند کپی از موجودی داریم؟ چند request؟»</p>
<p>بعد سه نتیجه را بخوانید: دو جعبه، دو request، و بعد از خرید هر دو عدد قدیمی را نشان می‌دهند تا دستی reload کنیم.</p>
<p>بپرسید: «در اپ خودمان، کدام data در بیشتر از یک screen هست؟ و بعد از یک خرید، امروز چطور به screenهای دیگر می‌گوییم refresh کنند؟»</p>` },

  'server-state': { time: '2′', html: `
<p>این ایده‌ی اصلی React Query است و کل معماری روی آن بنا شده: server data مال ما نیست، ما فقط یک کپی داریم که stale می‌شود.</p>
<p>screen state — متن فرم، تب انتخاب‌شده — واقعاً مال screen است. برای آن ViewModel یا remember کاملاً درست است.</p>
<p>اما server data نیازهای مشترکی دارد: cache، refetch، de-duplication، retry، invalidate. اگر این‌ها را در هر ViewModel بنویسیم، هر بار کمی متفاوت و کمی ناقص می‌نویسیم.</p>` },

  'sec-idea': { time: '0.5′', html: `
<p>پس ایده: یک layer مشترک برای همه‌ی server data. screen فقط دو چیز می‌گوید: چه data‌ای (key + fetch) و success state چه شکلی است.</p>` },

  box: { time: '2′', html: `
<p>راه‌حل: به جای یک جعبه در هر ViewModel، یک جعبه در یک جای مشترک. هر سه screen همان را می‌خوانند.</p>
<p>چهار چیز داخل جعبه را نشان دهید: data (یک StateFlow)، observers (چند screen نگاه می‌کنند)، lastFetch (کِی آخرین بار گرفته شد)، و request در جریان. بگویید: «بخش Engine دقیقاً همین چهار چیز است.»</p>
<p>اسم این جعبه در کد QueryEntry است.</p>` },

  'key-client': { time: '2′', html: `
<p>اپ جعبه‌های زیادی دارد، پس همه را در یک map نگه می‌داریم و هر جعبه یک اسم دارد: key. این map همان QueryClient است، یک Singleton در Hilt.</p>
<p>computeIfAbsent یعنی: اگر جعبه با این key هست همان را بده، اگر نیست بساز. برای همین screen دوم همان جعبه‌ی screen اول را می‌گیرد.</p>
<p>سه قانون key را بخوانید. بپرسید: «اگر key لیست سفارش‌ها فقط orders باشد و فیلتر باز/بسته داشته باشیم، چه باگی داریم؟» (هر دو فیلتر یک جعبه‌اند.)</p>` },

  'react-map': { time: '2′', html: `
<p>نقشه‌ی تکه به تکه از React Query به ComposeCleanArch. سه تفاوت را توضیح دهید:</p>
<ol><li><b>staleTime ۵ دقیقه به جای ۰:</b> وب ارزان رفرش می‌کند؛ موبایل باتری و دیتای کاربر را خرج می‌کند.</li>
<li><b>retry فقط برای transient error:</b> React Query default همه‌چیز را ۳ بار تکرار می‌کند؛ 4xx تکرار کردن فقط error را دیرتر نشان می‌دهد.</li>
<li><b>QueryState sealed:</b> compiler Kotlin حالت جاافتاده را می‌گیرد.</li></ol>` },

  primitives: { time: '2′', html: `
<p>سه ابزار: useQuery برای read، useMutation برای write، QueryContent برای نمایش.</p>
<p>پشت همه یک QueryClient است که Singleton Hilt است. خود DI مالک cache است، نه یک screen — برای همین بین screenها مشترک است.</p>
<p>از React Query الهام گرفته، ولی library‌ی بیرونی نیست؛ حدود ۹۰۰ خط Kotlin با Coroutines و StateFlow. Store5 را بررسی کردیم و کنار گذاشتیم چون برای نیاز ما سنگین بود.</p>` },

  flow: { time: '2′', html: `
<p>Data flow از بالا به پایین. فقط دو layer بالا Composable هستند: screen و hook.</p>
<p>cache engine — QueryClient و QueryEntry — Kotlin خالص است. یعنی بدون Compose و بدون امولاتور test می‌شود. این تصمیم عمدی است.</p>
<p>پایین‌ترین layer: Resource call adapter. هر endpoint نوع Resource برمی‌گرداند و adapter هر responseی را بدون throw به Resource تبدیل می‌کند؛ پس دیگر safeApiCall در هر فراخوانی نداریم.</p>
<p>Repository آن را باز می‌کند: یا domain model برمی‌گرداند یا throw می‌کند، و engine throw را به AppError تبدیل می‌کند.</p>` },

  modules: { time: '1.5′', html: `
<p>ساختار module‌ها در ComposeCleanArch. dependency فقط رو به پایین است و cycle ندارد.</p>
<p>عمداً feature module نداریم. feature module هزینه دارد و برای اپ به این اندازه سودش کم است؛ پلاگین convention آماده است برای روزی که لازم شود.</p>
<p>یک سؤال رایج: چرا mapperها در model نیستند؟ چون mapper به DTO اشاره می‌کند؛ اگر در model باشد، model به network وابسته می‌شود و cycle ایجاد می‌شود.</p>` },

  state: { time: '2′', html: `
<p>یک نسخه‌ی ساده سه فیلد مستقل دارد: data، error، isLoading. یعنی ۸ combination؛ می‌شود هم data داشت هم error هم loading، و هر screen باید تصمیم بگیرد کدام مهم‌تر است.</p>
<p>QueryState یک sealed interface است: دقیقاً یکی از سه state. when کامل است و compiler کمک می‌کند.</p>
<p>refreshing مهم است: وقتی data داریم و دوباره fetch می‌کنیم، Success با refreshing=true می‌ماند. spinner تمام‌صفحه نمی‌آید. این stale-while-revalidate است.</p>` },

  'sec-engine': { time: '0.5′', html: `
<p>حالا زیر کاپوت. برای هر key یک QueryEntry وجود دارد. چند simulator آماده کرده‌ام که رفتار واقعی engine را نشان می‌دهند.</p>` },

  'stale-rule': { time: '3′', html: `
<p>اولین قانون جعبه. جدول را بخوانید: خالی → fetch؛ fresh → از جعبه؛ stale → fetch. کد shouldFetch دقیقاً همین جدول است.</p>
<p>مثال: Wallet را باز می‌کنیم، جعبه خالی است، fetch. یک دقیقه بعد Dashboard: data fresh است، بدون request و فوراً نشان داده می‌شود.</p>
<p>روی کارت قرمز مکث کنید: stale شدن به‌تنهایی request نمی‌زند. اگر data باید زنده بماند، refetchInterval لازم است.</p>` },

  observers: { time: '3′', html: `
<p>دومین قانون: جعبه می‌شمارد چند screen نگاهش می‌کنند. log سمت چپ را خط به خط بخوانید.</p>
<p>دو تصمیم: فقط اولین observer fetch را شروع می‌کند؛ و وقتی شمارنده صفر شد، جعبه بعد از cacheTime پاک می‌شود — اگر کسی زودتر برگردد، تایمر لغو می‌شود.</p>
<p>کد پایین را نشان دهید: useQuery با DisposableEffect این شمارش را خودکار انجام می‌دهد. «screen روی صفحه است» یعنی «یک observer».</p>
<p>بعد برویم simulator و همین را زنده ببینیم.</p>` },

  lifecycle: { time: '4′', html: `
<p><b>سناریوی پیشنهادی برای اجرا:</b></p>
<ol>
<li>«باز کردن screen» → entry ساخته می‌شود، Loading، یک request.</li>
<li>دوباره «باز کردن screen» → screen دوم، بدون request؛ همان data.</li>
<li>دو بار «بستن screen» → شمارش معکوس حذف شروع می‌شود (cacheTime = ۱۰ دقیقه).</li>
<li>۲ بار «یک دقیقه بعد» و بعد «باز کردن» → حذف لغو شد، و چون هنوز fresh است requestی نرفت.</li>
<li>چند بار «یک دقیقه بعد» تا بیشتر از ۵ دقیقه → stale شد. توجه: خودبه‌خود refetch نمی‌کند؛ موقع باز شدن screen بعدی refetch می‌شود.</li>
<li>«invalidate» وقتی screen باز است → فوراً refetch، و data قبلی روی صفحه می‌ماند (refreshing).</li>
<li>بستن و ۱۰ بار «یک دقیقه بعد» → evict.</li>
</ol>
<p>دو عدد را به خاطر بسپارید: <b>staleTime</b> = تا کی از cache بخوان بدون request. <b>cacheTime</b> = بعد از رفتن آخرین screen، چقدر نگهش دار.</p>` },

  'fetch-steps': { time: '3′', html: `
<p>سومین قانون: خود fetch. سه کار به ترتیب: نشان بده load می‌کنی (Loading، یا data قبلی با refreshing)، fetcher را صدا بزن، نتیجه را ذخیره کن.</p>
<p>روی دو نکته تأکید کنید: اگر data قبلی هست، spinner روی صفحه‌ی پر نمی‌آید؛ و اگر request شکست بخورد، data قبلی می‌ماند.</p>
<p>خط اول کد: اگر یک request در جریان است، دومی شروع نمی‌شود. این de-duplication است؛ simulator بعدی همین را نشان می‌دهد.</p>` },

  dedup: { time: '2′', html: `
<p>اول حالت «هر screen جدا» را اجرا کنید: سه screen، سه request، سه کپی از یک data. این دقیقاً اتفاقی است که با سه ViewModel می‌افتد.</p>
<p>بعد «با QueryClient»: یک request؛ دو screen دیگر به in-flight request وصل می‌شوند.</p>
<p>مثال واقعی: موجودی کیف پول که هم در داشبورد هست، هم در screen کیف پول، هم در screen خرید.</p>
<p>این single-flight حتی بین threadهای واقعی تضمین شده — با compareAndSet روی in-flight — و برایش test داریم.</p>` },

  mutation: { time: '2.5′', html: `
<p>کاربر می‌خرد؛ موجودی در سرور عوض شد ولی جعبه‌ی موجودی هنوز عدد قدیمی را دارد. useMutation بعد از موفقیت، keyهای invalidateKeys را invalidate می‌کند.</p>
<p>کد invalidate را نشان دهید: دو خط. lastFetch صفر می‌شود (data کهنه حساب می‌شود)؛ اگر screenی نگاه می‌کند همین حالا fetch، وگرنه دفعه‌ی بعد که باز شود.</p>
<p>نکته‌ی اصلی: screen خرید نمی‌داند screen کیف پول وجود دارد. فقط می‌گوید کدام data عوض شد.</p>` },

  retry: { time: '2.5′', html: `
<p>روی چند error بزنید؛ پیشنهاد: اول IOException، بعد 422، بعد 401، بعد 500.</p>
<p>قانون ساده است: فقط transient error retry می‌شود — قطعی اتصال، timeout، 5xx. 4xx قطعی است؛ تکرارش فقط همان error را دیرتر نشان می‌دهد.</p>
<p>برای write، حساس‌تر است: حتی روی timeout ممکن است سرور سفارش را ثبت کرده باشد و فقط response گم شده باشد. retry یعنی سفارش تکراری. برای همین retry در mutation default خاموش است.</p>
<p>401 اینجا retry نمی‌شود چون TokenAuthenticator در OkHttp یک بار refresh می‌کند؛ اگر نشد، session پاک می‌شود و اپ خودش به screen ورود می‌رود. هیچ screen‌ای navigate به login نمی‌کند.</p>` },

  race: { time: '3′', html: `
<p>اول حالت «نسخه‌ی ساده» را قدم به قدم جلو ببرید. قبل از قدم ۴ بپرسید: «screen الان چه نشان می‌دهد؟»</p>
<p>polling یک request کند زده؛ وسطش کاربر خرید می‌کند و invalidate request دوم را می‌زند. دومی زودتر برمی‌گردد با ۸۰، و بعد اولی با ۱۰۰ می‌رسد و روی آن می‌نویسد.</p>
<p>بعد «با epoch»: هر fetch وقتی جای in-flight را می‌گیرد یک epoch می‌گیرد. fetch با force قبلی را لغو می‌کند، و اگر لغو به‌موقع نرسد، فقط fetchی که epochش آخرین است حق write دارد.</p>
<p>setData هم epoch را بالا می‌برد، پس optimistic update با یک response قدیمی پاک نمی‌شود.</p>` },

  polling: { time: '2′', html: `
<p>مثال useWalletBalance: هر ۱۵ ثانیه. جدول سمت چپ intervalهای پیشنهادی برای انواع data است.</p>
<p>polling فقط وقتی screen STARTED است اجرا می‌شود؛ در background باتری و دیتا مصرف نمی‌شود.</p>
<p>نکته‌ی ظریف: روی network‌ی کند، اگر request قبلی هنوز تمام نشده، این دور رد می‌شود. اگر force می‌زدیم، هر request قبل از رسیدن لغو می‌شد و data هرگز refetch نمی‌شد — بی‌صدا.</p>
<p>کد کامل، همراه با mutation خرید که همه‌ی موجودی‌ها را invalidate می‌کند، در examples/WalletHooks.kt است.</p>` },

  ticker: { time: '1.5′', html: `
<p>hook فقط برای REST نیست؛ یک contract است. useTickerPrice قیمت را از یک WebSocket مشترک می‌دهد و screen نمی‌داند منبع چیست (examples/TickerHooks.kt).</p>
<p>مدیریت lifecycle هم در یک hook است: در ON_STOP سوکت می‌خوابد و در ON_START بیدار می‌شود. هیچ screen‌ای این را تکرار نمی‌کند.</p>` },

  persistent: { time: '1.5′', html: `
<p>بیشتر keyها فقط در حافظه‌اند. اما برای data‌ای مثل پروفایل که باید بعد از بسته شدن اپ و بدون اینترنت باشد، useCachedQuery داریم.</p>
<p>Room source of truth است: مقدار از reader می‌آید، هر fetch موفق با writer ذخیره می‌شود. اگر network قطع باشد، مقدار ذخیره‌شده نمایش داده می‌شود.</p>
<p>defaultش OfflineForever است: خودش stale نمی‌شود و فقط با invalidate refetch می‌شود — مثلاً بعد از ویرایش پروفایل.</p>` },

  'sec-lessons': { time: '0.5′', html: `
<p>useQuery ساده را می‌شود یک عصره نوشت. این بخش نشان می‌دهد چرا engine ۸۸۰ خط است و ۱۰۰ خط نیست.</p>` },

  lessons: { time: '3′', html: `
<p>اول بپرسید: «اگر امروز بخواهید useQuery را خودتان بنویسید، چه چیزهایی می‌نویسید؟» لیستشان را روی تخته بنویسید، بعد جدول را نشان دهید.</p>
<p>روی سه ردیف تمرکز کنید:</p>
<ol><li><b>retry در write:</b> تکرار روی 4xx یا حتی timeout یعنی ریسک سفارش تکراری.</li>
<li><b>refetch ناموفق:</b> data‌ی خوب نباید با error جایگزین شود.</li>
<li><b>dynamic keys:</b> کلیدی برای هر نماد یا هر id، اگر از map حذف نشود، نشت حافظه است.</li></ol>
<p>درس عمومی: گزینه‌ای که کاری نمی‌کند از نبودنش بدتر است. هر گزینه یک test می‌خواهد.</p>` },

  doubletap: { time: '2′', html: `
<p>اول در «نسخه‌ی ساده» سریع دو سه بار روی خرید بزنید: دو یا سه سفارش ثبت می‌شود.</p>
<p>بعد «با single-flight»: ضربه‌های بعدی تا تمام شدن اولی نادیده گرفته می‌شوند.</p>
<p>غیرفعال کردن دکمه با isLoading کافی نیست؛ بین ضربه و recomposition فاصله هست. این تضمین باید در useMutation باشد، نه اینکه هر screen یادش بماند.</p>` },

  'sec-start': { time: '0.5′', html: `
<p>حالا مهم‌ترین بخش برای تیم: از فردا چطور بنویسیم.</p>` },

  'when-vm': { time: '2′', html: `
<p>«بدون ViewModel» یعنی برای server data، نه ممنوعیت مطلق.</p>
<p>اگر screen state محلی واقعی دارد — فرم، validation، جریان چندمرحله‌ای — state holder بسازید.</p>
<p>قانون مهم: state holder خودش fetch نمی‌کند. همان hookها و mutationها را صدا می‌زند. اگر state holder هم fetch کند، دو راه برای گرفتن data داریم و دوباره همان cache‌های ناقص برمی‌گردند.</p>` },

  rules: { time: '2′', html: `
<p>این شش قانون از ARCHITECTURE.md است و در code review به آن‌ها استناد می‌کنیم.</p>
<p>مخصوصاً در اپ مالی: پول همیشه BigDecimal پشت یک نوع Money. هیچ Double برای موجودی یا کارمزد.</p>
<p>و dispatcher تزریقی؛ بدون آن engine قابل test نیست.</p>` },

  recipe: { time: '2′', html: `
<p>recipe هر feature جدید، به ترتیب layer‌ها، از پایین به بالا: مدل، Api و keyها، DTO و mapper، Repository، Hilt، hook، screen، test.</p>
<p>کامل در ARCHITECTURE.md آمده. پیشنهاد: لینکش را در توضیح PRها بگذاریم.</p>` },

  cheatsheet: { time: '1.5′', html: `
<p>مرجع سریع برای وقتی کد می‌نویسید.</p>
<p>دو preset مفید: freshFor برای فیدها — از cache بخوان تا وقتی از یک مدت مشخص قدیمی‌تر شود — و OfflineForever برای چیزهایی مثل پروفایل که فقط با invalidate عوض می‌شوند.</p>
<p>metricsSnapshot برای پیدا کردن screen‌ای که بیش از حد request می‌زند یا زیاد error می‌دهد.</p>` },

  testing: { time: '1.5′', html: `
<p>چون engine Kotlin خالص است، با runTest و UnconfinedTestDispatcher test می‌شود؛ FakeClock هم زمان را جلو می‌برد، پس هیچ testی واقعاً منتظر نمی‌ماند.</p>
<p>این test dedup را نشان می‌دهد: fetcher پشت یک gate منتظر است، دو fetch دیگر زده می‌شود، و در نهایت فقط یک بار اجرا شده.</p>
<p>۱۲ test برای engine، و در کل ریپو ۲۸ test.</p>` },

  exercise: { time: '2′', html: `
<p>تمرین روی ComposeCleanArch. NewsAPI یک endpoint برای منابع دارد: top-headlines/sources.</p>
<p>هر قدم دقیقاً یکی از قدم‌های recipe است. useHeadlines همین حالا پارامتر source دارد، پس قدم آخر فقط اتصال است.</p>
<p>پیشنهاد اجرا: دونفره، یک هفته، و PR را با چک‌لیست بازبینی همین اسلاید review کنیم.</p>` },

  recap: { time: '2′', html: `
<p>همان جمله‌ی اول جلسه را دوباره بخوانید و بگویید: «حالا معنی‌اش را می‌دانید.»</p>
<p>پنج قدم را در یک نفس مرور کنید: وب همین مشکل را داشت؛ ما با ViewModelها کپی‌های جدا داریم؛ راه‌حل یک جعبه‌ی مشترک با key در QueryClient است؛ جعبه قانون دارد؛ و از فردا recipe هشت‌قدمی.</p>` },

  thanks: { time: '—', html: `
<p>ممنون. سؤال‌ها؟</p>
<p>قدم بعد: تمرین «منابع خبری» دونفره، و یک جلسه‌ی کوتاه review روی PRها با چک‌لیست.</p>` },

};
