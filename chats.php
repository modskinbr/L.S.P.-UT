<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>PHP: PHP 8.1.0 Release Announcement</title>

 <link rel="shortcut icon" href="https://www.php.net/favicon.ico">
 <link rel="alternate" type="application/atom+xml" href="https://www.php.net/releases/feed.php" title="PHP Release feed">
 <link rel="alternate" type="application/atom+xml" href="https://www.php.net/feed.atom" title="PHP: Hypertext Preprocessor">

 <link rel="canonical" href="https://www.php.net/releases/8.1/en.php">
 <link rel="shorturl" href="https://www.php.net/releases/8.1/en">
 <link rel="alternate" href="https://www.php.net/releases/8.1/en" hreflang="x-default">

 <!--[if lte IE 7]>
 <link rel="stylesheet" type="text/css" href="https://www.php.net/styles/workarounds.ie7.css" media="screen">
 <![endif]-->

 <!--[if lte IE 8]>
 <script>
  window.brokenIE = true;
 </script>
 <![endif]-->

 <!--[if lte IE 9]>
 <link rel="stylesheet" type="text/css" href="https://www.php.net/styles/workarounds.ie9.css" media="screen">
 <![endif]-->

 <!--[if IE]>
 <script src="https://www.php.net/js/ext/html5.js"></script>
 <![endif]-->

 <base href="https://www.php.net/releases/8.1/en.php">

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@official_php" />
<meta name="twitter:title" content="PHP 8.1 Released" />
<meta name="twitter:description" content="PHP 8.1 is a major update of the PHP language. Enums, readonly properties, first-class callable syntax, fibers, intersection types, performance improvements and more." />
<meta name="twitter:creator" content="@official_php" />
<meta name="twitter:image:src" content="https://www.php.net/images/php8/php_8_1_released.png" />

<meta itemprop="name" content="PHP 8.1 Released" />
<meta itemprop="description" content="PHP 8.1 is a major update of the PHP language. Enums, readonly properties, first-class callable syntax, fibers, intersection types, performance improvements and more." />
<meta itemprop="image" content="https://www.php.net/images/php8/php_8_1_released.png" />

<meta property="og:image" content="https://www.php.net/images/php8/php_8_1_released.png" />
<meta property="og:description" content="PHP 8.1 is a major update of the PHP language. Enums, readonly properties, first-class callable syntax, fibers, intersection types, performance improvements and more." />
</head>
<body class="php8 ">

<nav id="head-nav" class="navbar navbar-fixed-top">
  <div class="navbar-inner clearfix">
    <a href="/" class="brand"><img src="/images/logos/php-logo.svg" width="48" height="24" alt="php"></a>
    <div id="mainmenu-toggle-overlay"></div>
    <input type="checkbox" id="mainmenu-toggle">
    <ul class="nav">
      <li class=""><a href="/downloads">Downloads</a></li>
      <li class=""><a href="/docs.php">Documentation</a></li>
      <li class=""><a href="/get-involved" >Get Involved</a></li>
      <li class=""><a href="/support">Help</a></li>
      <li class="active">
        <a href="/releases/8.1/index.php">
          <img src="/images/php8/logo_php8_1.svg" alt="php8.1" height="22" width="60">
        </a>
      </li>
    </ul>
    <form class="navbar-search" id="topsearch" action="/search.php">
      <input type="hidden" name="show" value="quickref">
      <input type="search" name="pattern" class="search-query" placeholder="Search" accesskey="s">
    </form>
  </div>
  <div id="flash-message"></div>
</nav>
<nav id="trick"><div><dl>
<dt><a href='/manual/en/getting-started.php'>Getting Started</a></dt>
	<dd><a href='/manual/en/introduction.php'>Introduction</a></dd>
	<dd><a href='/manual/en/tutorial.php'>A simple tutorial</a></dd>
<dt><a href='/manual/en/langref.php'>Language Reference</a></dt>
	<dd><a href='/manual/en/language.basic-syntax.php'>Basic syntax</a></dd>
	<dd><a href='/manual/en/language.types.php'>Types</a></dd>
	<dd><a href='/manual/en/language.variables.php'>Variables</a></dd>
	<dd><a href='/manual/en/language.constants.php'>Constants</a></dd>
	<dd><a href='/manual/en/language.expressions.php'>Expressions</a></dd>
	<dd><a href='/manual/en/language.operators.php'>Operators</a></dd>
	<dd><a href='/manual/en/language.control-structures.php'>Control Structures</a></dd>
	<dd><a href='/manual/en/language.functions.php'>Functions</a></dd>
	<dd><a href='/manual/en/language.oop5.php'>Classes and Objects</a></dd>
	<dd><a href='/manual/en/language.namespaces.php'>Namespaces</a></dd>
	<dd><a href='/manual/en/language.enumerations.php'>Enumerations</a></dd>
	<dd><a href='/manual/en/language.errors.php'>Errors</a></dd>
	<dd><a href='/manual/en/language.exceptions.php'>Exceptions</a></dd>
	<dd><a href='/manual/en/language.fibers.php'>Fibers</a></dd>
	<dd><a href='/manual/en/language.generators.php'>Generators</a></dd>
	<dd><a href='/manual/en/language.attributes.php'>Attributes</a></dd>
	<dd><a href='/manual/en/language.references.php'>References Explained</a></dd>
	<dd><a href='/manual/en/reserved.variables.php'>Predefined Variables</a></dd>
	<dd><a href='/manual/en/reserved.exceptions.php'>Predefined Exceptions</a></dd>
	<dd><a href='/manual/en/reserved.interfaces.php'>Predefined Interfaces and Classes</a></dd>
	<dd><a href='/manual/en/context.php'>Context options and parameters</a></dd>
	<dd><a href='/manual/en/wrappers.php'>Supported Protocols and Wrappers</a></dd>
</dl>
<dl>
<dt><a href='/manual/en/security.php'>Security</a></dt>
	<dd><a href='/manual/en/security.current.php'>Keeping Current</a></dd>
</dl>
<dl>
<dt>Keyboard Shortcuts</dt><dt>?</dt>
<dd>This help</dd>
<dt>j</dt>
<dd>Next menu item</dd>
<dt>k</dt>
<dd>Previous menu item</dd>
<dt>g p</dt>
<dd>Previous man page</dd>
<dt>g n</dt>
<dd>Next man page</dd>
<dt>G</dt>
<dd>Scroll to bottom</dd>
<dt>g g</dt>
<dd>Scroll to top</dd>
<dt>g h</dt>
<dd>Goto homepage</dd>
<dt>g s</dt>
<dd>Goto search<br>(current page)</dd>
<dt>/</dt>
<dd>Focus search box</dd>
</dl></div></nav>
<div id="goto">
    <div class="search">
         <div class="text"></div>
         <div class="results"><ul></ul></div>
   </div>
</div>





<div id="layout" class="clearfix">
  <section id="layout-content">
<section class="php8-section php8-section_dark php8-section_header center">
    <div class="page-tools">
        <div class="change-language">
            
      <form action="" method="get" id="changelang" name="changelang">
        <fieldset>
          <label for="changelang-langs">Change language:</label>
          <select onchange="location = this.value + '.php'" name="lang" id="changelang-langs">
            <option value='en' selected="selected">English</option>
            <option value='es'>Español</option>
            <option value='de'>Deutsch</option>
            <option value='pt_BR'>Português do Brasil</option>
            <option value='ru'>Русский</option>
            <option value='zh'>简体中文</option>
            <option value='ka'>ქართული</option>
            <option value='ja'>日本語</option>
          </select>
        </fieldset>
      </form>
        </div>
    </div>
    <div class="php8-section__content">
        <div class="php8-logo">
            <img src="/images/php8/logo_php8_1.svg" alt="php8.1" height="126" width="343">
        </div>
        <div class="php8-title">Released!</div>
        <div class="php8-subtitle">PHP 8.1 is a major update of the PHP language.<br class="display-none-md"> It contains many new features, including enums, readonly&nbsp;properties, first-class&nbsp;callable&nbsp;syntax, fibers, intersection&nbsp;types, performance improvements and more.</div>
        <div class="php8-button-wrapper center">
            <a class="php8-button php8-button_light" href="/downloads">Upgrade to PHP 8.1 now!</a>
        </div>
    </div>
</section>

<section class="php8-section center">
    <div class="php8-compare">
        <h2 class="php8-h2" id="enumerations">
            Enumerations            <a class="php8-rfc" href="https://wiki.php.net/rfc/enumerations">RFC</a> <a class="php8-rfc" href="/manual/en/language.enumerations.php">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">Status<br /></span><span class="keyword">{<br />&nbsp; &nbsp; const </span><span class="default">DRAFT </span><span class="keyword">= </span><span class="string">'draft'</span><span class="keyword">;<br />&nbsp; &nbsp; const </span><span class="default">PUBLISHED </span><span class="keyword">= </span><span class="string">'published'</span><span class="keyword">;<br />&nbsp; &nbsp; const </span><span class="default">ARCHIVED </span><span class="keyword">= </span><span class="string">'archived'</span><span class="keyword">;<br />}<br />function </span><span class="default">acceptStatus</span><span class="keyword">(</span><span class="default">string $status</span><span class="keyword">) {...}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">enum Status<br /></span><span class="keyword">{<br />&nbsp; &nbsp; case </span><span class="default">Draft</span><span class="keyword">;<br />&nbsp; &nbsp; case </span><span class="default">Published</span><span class="keyword">;<br />&nbsp; &nbsp; case </span><span class="default">Archived</span><span class="keyword">;<br />}<br />function </span><span class="default">acceptStatus</span><span class="keyword">(</span><span class="default">Status $status</span><span class="keyword">) {...}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            Use enum instead of a set of constants and get validation out of the box.        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="readonly_properties">
            Readonly Properties            <a class="php8-rfc" href="https://wiki.php.net/rfc/readonly_properties_v2">RFC</a> <a class="php8-rfc" href="/manual/en/language.oop5.properties.php#language.oop5.properties.readonly-properties">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">BlogData<br /></span><span class="keyword">{<br />&nbsp; &nbsp; private </span><span class="default">Status $status</span><span class="keyword">;<br />&nbsp;&nbsp; <br />&nbsp; &nbsp; public function </span><span class="default">__construct</span><span class="keyword">(</span><span class="default">Status $status</span><span class="keyword">) <br />&nbsp; &nbsp; {<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">status </span><span class="keyword">= </span><span class="default">$status</span><span class="keyword">;<br />&nbsp; &nbsp; }<br />&nbsp; &nbsp; <br />&nbsp; &nbsp; public function </span><span class="default">getStatus</span><span class="keyword">(): </span><span class="default">Status <br />&nbsp; &nbsp; </span><span class="keyword">{<br />&nbsp; &nbsp; &nbsp; &nbsp; return </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">status</span><span class="keyword">;&nbsp; &nbsp; <br />&nbsp; &nbsp; }<br />}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">BlogData<br /></span><span class="keyword">{<br />&nbsp; &nbsp; public </span><span class="default">readonly Status $status</span><span class="keyword">;<br />&nbsp;&nbsp; <br />&nbsp; &nbsp; public function </span><span class="default">__construct</span><span class="keyword">(</span><span class="default">Status $status</span><span class="keyword">) <br />&nbsp; &nbsp; {<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">status </span><span class="keyword">= </span><span class="default">$status</span><span class="keyword">;<br />&nbsp; &nbsp; }<br />}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>Readonly properties cannot be changed after initialization, i.e. after a value is assigned to them.<br>They are a great way to model value objects and data-transfer objects.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="first_class_callable_syntax">
            First-class Callable Syntax            <a class="php8-rfc" href="https://wiki.php.net/rfc/first_class_callable_syntax">RFC</a> <a class="php8-rfc" href="/manual/en/functions.first_class_callable_syntax.php">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$foo </span><span class="keyword">= [</span><span class="default">$this</span><span class="keyword">, </span><span class="string">'foo'</span><span class="keyword">];<br /><br /></span><span class="default">$fn </span><span class="keyword">= </span><span class="default">Closure</span><span class="keyword">::</span><span class="default">fromCallable</span><span class="keyword">(</span><span class="string">'strlen'</span><span class="keyword">);</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$foo </span><span class="keyword">= </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">foo</span><span class="keyword">(...);<br /><br /></span><span class="default">$fn </span><span class="keyword">= </span><span class="default">strlen</span><span class="keyword">(...);</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>It is now possible to get a reference to any function – this is called first-class callable syntax.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="new_in_initializers">
            New in initializers            <a class="php8-rfc" href="https://wiki.php.net/rfc/new_in_initializers">RFC</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">Service <br /></span><span class="keyword">{<br />&nbsp; &nbsp; private </span><span class="default">Logger $logger</span><span class="keyword">;<br /> <br />&nbsp; &nbsp; public function </span><span class="default">__construct</span><span class="keyword">(<br />&nbsp; &nbsp; &nbsp; &nbsp; ?</span><span class="default">Logger $logger </span><span class="keyword">= </span><span class="default">null</span><span class="keyword">,<br />&nbsp; &nbsp; ) {<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">logger </span><span class="keyword">= </span><span class="default">$logger </span><span class="keyword">?? new </span><span class="default">NullLogger</span><span class="keyword">();<br />&nbsp; &nbsp; }<br />}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">Service <br /></span><span class="keyword">{<br />&nbsp; &nbsp; private </span><span class="default">Logger $logger</span><span class="keyword">;<br />&nbsp; &nbsp; <br />&nbsp; &nbsp; public function </span><span class="default">__construct</span><span class="keyword">(<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="default">Logger $logger </span><span class="keyword">= new </span><span class="default">NullLogger</span><span class="keyword">(),<br />&nbsp; &nbsp; ) {<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="default">$this</span><span class="keyword">-&gt;</span><span class="default">logger </span><span class="keyword">= </span><span class="default">$logger</span><span class="keyword">;<br />&nbsp; &nbsp; }<br />}</span>
</span>
</code></div>                </div>
            </div>
        </div>

        <div class="php8-compare__content php8-compare__content--spaced">
            <p>Objects can now be used as default parameter values, static variables, and global constants, as well as in attribute arguments.</p>
            <p>This effectively makes it possible to use <strong>nested attributes</strong>.</p>        </div>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">User <br /></span><span class="keyword">{<br />&nbsp; &nbsp; </span><span class="comment">/**<br />&nbsp; &nbsp;&nbsp; * @Assert\All({<br />&nbsp; &nbsp;&nbsp; *&nbsp; &nbsp;&nbsp; @Assert\NotNull,<br />&nbsp; &nbsp;&nbsp; *&nbsp; &nbsp;&nbsp; @Assert\Length(min=5)<br />&nbsp; &nbsp;&nbsp; * })<br />&nbsp; &nbsp;&nbsp; */<br />&nbsp; &nbsp; </span><span class="keyword">public </span><span class="default">string $name </span><span class="keyword">= </span><span class="string">''</span><span class="keyword">;<br />}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">User <br /></span><span class="keyword">{<br />&nbsp; &nbsp; </span><span class="comment">#[\Assert\All(<br />&nbsp; &nbsp; &nbsp; &nbsp; </span><span class="keyword">new \</span><span class="default">Assert</span><span class="keyword">\</span><span class="default">NotNull</span><span class="keyword">,<br />&nbsp; &nbsp; &nbsp; &nbsp; new \</span><span class="default">Assert</span><span class="keyword">\</span><span class="default">Length</span><span class="keyword">(</span><span class="default">min</span><span class="keyword">: </span><span class="default">6</span><span class="keyword">))<br />&nbsp; &nbsp; ]<br />&nbsp; &nbsp; public </span><span class="default">string $name </span><span class="keyword">= </span><span class="string">''</span><span class="keyword">;<br />}</span>
</span>
</code></div>                </div>
            </div>
        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="pure_intersection_types">
            Pure Intersection Types            <a class="php8-rfc" href="https://wiki.php.net/rfc/pure-intersection-types">RFC</a> <a class="php8-rfc" href="/manual/en/language.types.declarations.php#language.types.declarations.composite.intersection">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">function </span><span class="default">count_and_iterate</span><span class="keyword">(</span><span class="default">Iterator $value</span><span class="keyword">) {<br />&nbsp; &nbsp; if (!(</span><span class="default">$value </span><span class="keyword">instanceof </span><span class="default">Countable</span><span class="keyword">)) {<br />&nbsp; &nbsp; &nbsp; &nbsp; throw new </span><span class="default">TypeError</span><span class="keyword">(</span><span class="string">'value must be Countable'</span><span class="keyword">);<br />&nbsp; &nbsp; }<br /><br />&nbsp; &nbsp; foreach (</span><span class="default">$value </span><span class="keyword">as </span><span class="default">$val</span><span class="keyword">) {<br />&nbsp; &nbsp; &nbsp; &nbsp; echo </span><span class="default">$val</span><span class="keyword">;<br />&nbsp; &nbsp; }<br /><br />&nbsp; &nbsp; </span><span class="default">count</span><span class="keyword">(</span><span class="default">$value</span><span class="keyword">);<br />}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">function </span><span class="default">count_and_iterate</span><span class="keyword">(</span><span class="default">Iterator</span><span class="keyword">&amp;</span><span class="default">Countable $value</span><span class="keyword">) {<br />&nbsp; &nbsp; foreach (</span><span class="default">$value </span><span class="keyword">as </span><span class="default">$val</span><span class="keyword">) {<br />&nbsp; &nbsp; &nbsp; &nbsp; echo </span><span class="default">$val</span><span class="keyword">;<br />&nbsp; &nbsp; }<br /><br />&nbsp; &nbsp; </span><span class="default">count</span><span class="keyword">(</span><span class="default">$value</span><span class="keyword">);<br />}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>Use intersection types when a value needs to satisfy multiple type constraints at the same time.</p>
            <p>It is not currently possible to mix intersection and union types together such as <code>A&B|C</code>.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="never_return_type">
            Never return type            <a class="php8-rfc" href="https://wiki.php.net/rfc/noreturn_type">RFC</a> <a class="php8-rfc" href="/manual/en/language.types.declarations.php#language.types.declarations.never">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">function </span><span class="default">redirect</span><span class="keyword">(</span><span class="default">string $uri</span><span class="keyword">) {<br />&nbsp; &nbsp; </span><span class="default">header</span><span class="keyword">(</span><span class="string">'Location: ' </span><span class="keyword">. </span><span class="default">$uri</span><span class="keyword">);<br />&nbsp; &nbsp; exit();<br />}<br /> <br />function </span><span class="default">redirectToLoginPage</span><span class="keyword">() {<br />&nbsp; &nbsp; </span><span class="default">redirect</span><span class="keyword">(</span><span class="string">'/login'</span><span class="keyword">);<br />&nbsp; &nbsp; echo </span><span class="string">'Hello'</span><span class="keyword">; </span><span class="comment">// &lt;- dead code<br /></span><span class="keyword">}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">function </span><span class="default">redirect</span><span class="keyword">(</span><span class="default">string $uri</span><span class="keyword">): </span><span class="default">never </span><span class="keyword">{<br />&nbsp; &nbsp; </span><span class="default">header</span><span class="keyword">(</span><span class="string">'Location: ' </span><span class="keyword">. </span><span class="default">$uri</span><span class="keyword">);<br />&nbsp; &nbsp; exit();<br />}<br /> <br />function </span><span class="default">redirectToLoginPage</span><span class="keyword">(): </span><span class="default">never </span><span class="keyword">{<br />&nbsp; &nbsp; </span><span class="default">redirect</span><span class="keyword">(</span><span class="string">'/login'</span><span class="keyword">);<br />&nbsp; &nbsp; echo </span><span class="string">'Hello'</span><span class="keyword">; </span><span class="comment">// &lt;- dead code detected by static analysis <br /></span><span class="keyword">}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>A function or method declared with the <code>never</code> type indicates that it will not return a value and will either throw an exception or end the script’s execution with a call of <code>die()</code>, <code>exit()</code>, <code>trigger_error()</code>, or something similar.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="final_class_constants">
            Final class constants            <a class="php8-rfc" href="https://wiki.php.net/rfc/final_class_const">RFC</a> <a class="php8-rfc" href="/manual/en/language.oop5.final.php#language.oop5.final.example.php81">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">Foo<br /></span><span class="keyword">{<br />&nbsp; &nbsp; public const </span><span class="default">XX </span><span class="keyword">= </span><span class="string">"foo"</span><span class="keyword">;<br />}<br /><br />class </span><span class="default">Bar </span><span class="keyword">extends </span><span class="default">Foo<br /></span><span class="keyword">{<br />&nbsp; &nbsp; public const </span><span class="default">XX </span><span class="keyword">= </span><span class="string">"bar"</span><span class="keyword">; </span><span class="comment">// No error<br /></span><span class="keyword">}</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default"></span><span class="keyword">class </span><span class="default">Foo<br /></span><span class="keyword">{<br />&nbsp; &nbsp; final public const </span><span class="default">XX </span><span class="keyword">= </span><span class="string">"foo"</span><span class="keyword">;<br />}<br /><br />class </span><span class="default">Bar </span><span class="keyword">extends </span><span class="default">Foo<br /></span><span class="keyword">{<br />&nbsp; &nbsp; public const </span><span class="default">XX </span><span class="keyword">= </span><span class="string">"bar"</span><span class="keyword">; </span><span class="comment">// Fatal error<br /></span><span class="keyword">}</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>It is possible to declare final class constants, so that they cannot be overridden in child classes.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="explicit_octal_numeral_notation">
            Explicit Octal numeral notation            <a class="php8-rfc" href="https://wiki.php.net/rfc/explicit_octal_notation">RFC</a> <a class="php8-rfc" href="/manual/en/migration81.new-features.php#migration81.new-features.core.octal-literal-prefix">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">016 </span><span class="keyword">=== </span><span class="default">16</span><span class="keyword">; </span><span class="comment">// false because `016` is octal for `14` and it's confusing<br /></span><span class="default">016 </span><span class="keyword">=== </span><span class="default">14</span><span class="keyword">; </span><span class="comment">// true </span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">0o16 </span><span class="keyword">=== </span><span class="default">16</span><span class="keyword">; </span><span class="comment">// false — not confusing with explicit notation<br /></span><span class="default">0o16 </span><span class="keyword">=== </span><span class="default">14</span><span class="keyword">; </span><span class="comment">// true </span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>It is now possible to write octal numbers with the explicit <code>0o</code> prefix.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="fibers">
            Fibers            <a class="php8-rfc" href="https://wiki.php.net/rfc/fibers">RFC</a> <a class="php8-rfc" href="/manual/en/language.fibers.php">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$httpClient</span><span class="keyword">-&gt;</span><span class="default">request</span><span class="keyword">(</span><span class="string">'https://example.com/'</span><span class="keyword">)<br />&nbsp; &nbsp; &nbsp; &nbsp; -&gt;</span><span class="default">then</span><span class="keyword">(function (</span><span class="default">Response $response</span><span class="keyword">) {<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return </span><span class="default">$response</span><span class="keyword">-&gt;</span><span class="default">getBody</span><span class="keyword">()-&gt;</span><span class="default">buffer</span><span class="keyword">();<br />&nbsp; &nbsp; &nbsp; &nbsp; })<br />&nbsp; &nbsp; &nbsp; &nbsp; -&gt;</span><span class="default">then</span><span class="keyword">(function (</span><span class="default">string $responseBody</span><span class="keyword">) {<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; print </span><span class="default">json_decode</span><span class="keyword">(</span><span class="default">$responseBody</span><span class="keyword">)[</span><span class="string">'code'</span><span class="keyword">];<br />&nbsp; &nbsp; &nbsp; &nbsp; });</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$response </span><span class="keyword">= </span><span class="default">$httpClient</span><span class="keyword">-&gt;</span><span class="default">request</span><span class="keyword">(</span><span class="string">'https://example.com/'</span><span class="keyword">);<br />print </span><span class="default">json_decode</span><span class="keyword">(</span><span class="default">$response</span><span class="keyword">-&gt;</span><span class="default">getBody</span><span class="keyword">()-&gt;</span><span class="default">buffer</span><span class="keyword">())[</span><span class="string">'code'</span><span class="keyword">];</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>Fibers are primitives for implementing lightweight cooperative concurrency. They are a means of creating code blocks that can be paused and resumed like Generators, but from anywhere in the stack. Fibers themselves don't magically provide concurrency, there still needs to be an event loop. However, they allow blocking and non-blocking implementations to share the same API.</p><p>Fibers allow getting rid of the boilerplate code previously seen with <code>Promise::then()</code> or Generator based coroutines. Libraries will generally build further abstractions around Fibers, so there's no need to interact with them directly.</p>        </div>
    </div>

    <div class="php8-compare">
        <h2 class="php8-h2" id="array_unpacking_support_for_string_keyed_arrays">
            Array unpacking support for string-keyed arrays            <a class="php8-rfc" href="https://wiki.php.net/rfc/array_unpacking_string_keys">RFC</a> <a class="php8-rfc" href="/manual/en/language.types.array.php#language.types.array.unpacking">Doc</a>
        </h2>
        <div class="php8-compare__main">
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label">PHP &lt; 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$arrayA </span><span class="keyword">= [</span><span class="string">'a' </span><span class="keyword">=&gt; </span><span class="default">1</span><span class="keyword">];<br /></span><span class="default">$arrayB </span><span class="keyword">= [</span><span class="string">'b' </span><span class="keyword">=&gt; </span><span class="default">2</span><span class="keyword">];<br /><br /></span><span class="default">$result </span><span class="keyword">= </span><span class="default">array_merge</span><span class="keyword">([</span><span class="string">'a' </span><span class="keyword">=&gt; </span><span class="default">0</span><span class="keyword">], </span><span class="default">$arrayA</span><span class="keyword">, </span><span class="default">$arrayB</span><span class="keyword">);<br /><br /></span><span class="comment">// ['a' =&gt; 1, 'b' =&gt; 2]</span>
</span>
</code></div>                </div>
            </div>
            <div class="php8-compare__arrow"></div>
            <div class="php8-compare__block example-contents">
                <div class="php8-compare__label php8-compare__label_new">PHP 8.1</div>
                <div class="php8-code phpcode">
                    <div class="phpcode"><code><span class="html">
<span class="default">$arrayA </span><span class="keyword">= [</span><span class="string">'a' </span><span class="keyword">=&gt; </span><span class="default">1</span><span class="keyword">];<br /></span><span class="default">$arrayB </span><span class="keyword">= [</span><span class="string">'b' </span><span class="keyword">=&gt; </span><span class="default">2</span><span class="keyword">];<br /><br /></span><span class="default">$result </span><span class="keyword">= [</span><span class="string">'a' </span><span class="keyword">=&gt; </span><span class="default">0</span><span class="keyword">, ...</span><span class="default">$arrayA</span><span class="keyword">, ...</span><span class="default">$arrayB</span><span class="keyword">];<br /><br /></span><span class="comment">// ['a' =&gt; 1, 'b' =&gt; 2]</span>
</span>
</code></div>                </div>
            </div>
        </div>
        <div class="php8-compare__content">
            <p>PHP supported unpacking inside arrays through the spread operator before, but only if the arrays had integer keys. Now it is possible to unpack arrays with string keys too.</p>        </div>
    </div>
</section>

<section class="php8-section center php8-section_light php8-columns">
    <div class="php8-column">
        <h2 class="php8-h2" id="performance_improvements">Performance Improvements</h2>
        <div class="php8-compare__content">
            <div class="center">
                <strong>Symfony Demo App request time</strong><br>
                25 consecutive runs, 250 requests (sec)<br>
                (less is better)<br>                <div class="php8-chart__table">
                    <img src="/images/php8/php81_performance.svg" alt="">
                </div>
            </div>
            <h3 class="php8-h3">The result (relative to PHP 8.0):</h3>
            <ul>
                <li>23.0% Symfony Demo speedup</li>
                <li>3.5% WordPress speedup</li>
            </ul>
            <h3 class="php8-h3">Performance related features in PHP 8.1:</h3>
            <ul>
                <li>JIT backend for ARM64 (AArch64)</li>
                <li>Inheritance cache (avoid relinking classes in each request)</li>
                <li>Fast class name resolution (avoid lowercasing and hash lookup)</li>
                <li>timelib and ext/date performance improvements</li>
                <li>SPL file-system iterators improvements</li>
                <li>serialize/unserialize optimizations</li>
                <li>Some internal functions optimization (get_declared_classes(), explode(), strtr(), strnatcmp(), dechex())</li>
                <li>JIT improvements and fixes</li>
            </ul>
        </div>
    </div>

    <div class="php8-column">
        <h2 class="php8-h2" id="other_new_things">New Classes, Interfaces, and Functions</h2>
        <div class="php8-compare__content php8-compare__content--block">
            <ul>
                <li>New <code>#[ReturnTypeWillChange]</code> attribute.</li>
                <li>New <code>fsync</code> and <code>fdatasync</code> functions.</li>
                <li>New <code>array_is_list</code> function.</li>
                <li>New Sodium XChaCha20 functions.</li>
            </ul>
        </div>
        <h2 class="php8-h2 php8-h2_margin-top" id="deprecations_and_bc_breaks">Deprecations and backward compatibility breaks</h2>
        <div class="php8-compare__content">
            <ul>
                <li>Passing null to non-nullable internal function parameters is deprecated.</li>
                <li>Tentative return types in PHP built-in class methods</li>
                <li><code>Serializable</code> interface deprecated.</li>
                <li>HTML entity en/decode functions process single quotes and substitute by default.</li>
                <li><code>$GLOBALS</code> variable restrictions.</li>
                <li>MySQLi: Default error mode set to exceptions.</li>
                <li>Implicit incompatible float to int conversion is deprecated.</li>
                <li>finfo Extension: <code>file_info</code> resources migrated to existing finfo objects.</li>
                <li>IMAP: imap resources migrated to <code>IMAP\Connection</code> class objects.</li>
                <li>FTP Extension: Connection resources migrated to <code>FTP\Connection</code> class objects.</li>
                <li>GD Extension: Font identifiers migrated to <code>GdFont</code> class objects.</li>
                <li>LDAP: resources migrated to <code>LDAP\Connection</code>, <code>LDAP\Result</code>, and <code>LDAP\ResultEntry</code> objects.</li>
                <li>PostgreSQL: resources migrated to <code>PgSql\Connection</code>, <code>PgSql\Result</code>, and <code>PgSql\Lob</code> objects.</li>
                <li>Pspell: pspell, pspell config resources migrated to <code>PSpell\Dictionary</code>, <code>PSpell\Config</code> class objects.</li>
            </ul>
        </div>
    </div>
</section>

<section class="php8-section php8-section_dark php8-section_footer php8-footer">
    <div class="php8-section__content">
        <h2 class="php8-h2 center">Better performance, better syntax, improved type safety.</h2>
        <div class="php8-button-wrapper center">
            <a class="php8-button php8-button_light" href="/downloads">Upgrade to PHP 8.1 now!</a>
        </div>
        <div class="php8-footer__content">
            <p>
        For source downloads of PHP 8.1 please visit the <a href="https://www.php.net/downloads">downloads</a> page.
        Windows binaries can be found on the <a href="https://windows.php.net/download">PHP for Windows</a> site.
        The list of changes is recorded in the <a href="https://www.php.net/ChangeLog-8.php#PHP_8_1">ChangeLog</a>.
      </p>
      <p>
        The <a href="/manual/en/migration81.php">migration guide</a> is available in the PHP Manual. Please
        consult it for a detailed list of new features and backward-incompatible changes.
      </p>        </div>
    </div>
</section>

    </section><!-- layout-content -->
    

  </div><!-- layout -->

   
 <!-- External and third party libraries. -->
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" integrity="sha384-aBL3Lzi6c9LNDGvpHkZrrm3ZVsIwohDD7CDozL0pk8FwCrfmV7H9w8j3L7ikEv6h" crossorigin="anonymous"></script>

<a id="toTop" href="javascript:;"><span id="toTopHover"></span><img width="40" height="40" alt="To Top" src="/images/to-top@2x.png"></a>

</body>
</html>
