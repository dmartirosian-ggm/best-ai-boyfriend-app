<?xml version="1.0" encoding="UTF-8"?>
<!-- Makes sitemap XML readable in browsers. Search engines ignore this file. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap</title>
        <style>
          body { margin: 0; padding: 24px 16px; font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fbf7f4; color: #1d1720; }
          main { max-width: 960px; margin: 0 auto; }
          h1 { font-size: 1.6rem; margin: 0 0 4px; }
          p { color: #7a7180; margin: 0 0 20px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e6dcd5; border-radius: 12px; overflow: hidden; }
          th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #e6dcd5; }
          th { font-size: 12px; text-transform: uppercase; letter-spacing: .08em; color: #7a7180; background: #f3ece6; }
          td { word-break: break-all; }
          td.d { white-space: nowrap; color: #7a7180; word-break: normal; }
          a { color: #b0245b; }
          @media (prefers-color-scheme: dark) {
            body { background: #151117; color: #f3edf2; }
            table { background: #211b25; border-color: #342b38; }
            th { background: #1d1820; } th, td { border-color: #342b38; }
            a { color: #f0619a; }
          }
        </style>
      </head>
      <body>
        <main>
          <xsl:choose>
            <xsl:when test="s:sitemapindex">
              <h1>Sitemap index</h1>
              <p>This file lists <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemap(s) for search engines.</p>
              <table>
                <tr><th>Sitemap</th><th>Last updated</th></tr>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="d"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <h1>Sitemap</h1>
              <p><xsl:value-of select="count(s:urlset/s:url)"/> pages listed for search engines.</p>
              <table>
                <tr><th>Page</th><th>Last updated</th></tr>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                    <td class="d"><xsl:value-of select="substring(s:lastmod, 1, 10)"/></td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
