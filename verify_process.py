import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel='chrome', headless=True)
        page = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page.goto('http://localhost:3001', wait_until='networkidle')
        await page.wait_for_timeout(1000)
        
        await page.mouse.wheel(0, 2400)
        await page.wait_for_timeout(400)
        top1 = await page.evaluate("() => document.querySelector('#process .sticky').getBoundingClientRect().top")
        scale1 = await page.evaluate("() => document.querySelector('#process div[style*=\"scaleY\"]').style.transform")
        active1 = await page.evaluate("() => document.querySelector('#process h3.text-white')?.textContent")
        
        await page.mouse.wheel(0, 900)
        await page.wait_for_timeout(400)
        top2 = await page.evaluate("() => document.querySelector('#process .sticky').getBoundingClientRect().top")
        scale2 = await page.evaluate("() => document.querySelector('#process div[style*=\"scaleY\"]').style.transform")
        active2 = await page.evaluate("() => document.querySelector('#process h3.text-white')?.textContent")
        
        print(f'Top 1: {top1}, Top 2: {top2}')
        print(f'Scale 1: {scale1}, Scale 2: {scale2}')
        print(f'Active 1: {active1}, Active 2: {active2}')
        
        await page.screenshot(path=r'C:\Users\raksh\.gemini\antigravity\brain\c3babc90-4537-4a4d-aab2-414efffcab3c\process_fixed_desktop.png')
        await browser.close()

asyncio.run(main())

