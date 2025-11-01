# 💰 DawaCalc Monetization Guide

## Ad Placement Strategy

The website now includes strategic ad placements for monetization:

### 📍 Ad Banner Locations

1. **Homepage - Below Insurance Selection** (Step 1)
   - Format: Horizontal banner (120px height)
   - Position: After user selects insurance type
   - High visibility area

2. **Search Page - Below Search Input** (Step 2)
   - Format: Small horizontal banner (100px height)
   - Position: Between search box and medication selection
   - Non-intrusive placement

3. **Results Page - Top** (Step 3)
   - Format: Horizontal banner (120px height)
   - Position: Above calculation results
   - Prime engagement location

4. **Results Page - Bottom** (Step 3)
   - Format: Medium rectangle (250px height)
   - Position: Below calculation results
   - Extended viewing time

5. **Footer - Site-wide**
   - Format: Horizontal banner (120px height)
   - Position: Before footer content
   - Visible on all pages

---

## 🚀 Setup Instructions

### Step 1: Get Google AdSense Account

1. Sign up for [Google AdSense](https://www.google.com/adsense/)
2. Add your website URL: `your-domain.com`
3. Wait for approval (typically 1-3 days)

### Step 2: Get Your AdSense Code

Once approved:
1. Go to AdSense Dashboard
2. Click "Ads" → "By ad unit"
3. Create new ad units for each placement
4. Copy your **Publisher ID** (ca-pub-XXXXXXXXXXXXXXXXX)
5. Copy each ad unit's **Slot ID**

### Step 3: Update the Code

#### A. Add AdSense Script to HTML

Edit `index.html` and add this in the `<head>` section:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>
```

Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your actual Publisher ID.

#### B. Update AdBanner Component

Edit `src/components/AdBanner.tsx`:

1. Replace `ca-pub-XXXXXXXXXXXXXXXXX` with your Publisher ID (line 24)
2. Use the component with your actual slot IDs:

```tsx
// Example usage with real slot ID:
<AdBanner slot="1234567890" format="horizontal" />
```

#### C. Replace Placeholder Ads (Production Ready)

In `src/pages/Index.tsx`, replace `PlaceholderAd` with `AdBanner`:

```tsx
// Change from:
import { PlaceholderAd } from '@/components/AdBanner';

// To:
import AdBanner from '@/components/AdBanner';

// Then replace each PlaceholderAd with:
<AdBanner slot="YOUR_SLOT_ID" format="horizontal" />
```

### Step 4: Ad Slot IDs Setup

Create separate ad units in AdSense for each location:

| Location | Recommended Format | Replace With |
|----------|-------------------|--------------|
| Below Insurance Selection | Horizontal | `<AdBanner slot="SLOT_1" format="horizontal" />` |
| Below Search Input | Horizontal | `<AdBanner slot="SLOT_2" format="horizontal" />` |
| Results Top | Horizontal | `<AdBanner slot="SLOT_3" format="horizontal" />` |
| Results Bottom | Rectangle | `<AdBanner slot="SLOT_4" format="rectangle" />` |
| Footer | Horizontal | `<AdBanner slot="SLOT_5" format="horizontal" />` |

---

## 📊 Expected Revenue

Based on typical healthcare/pharmacy website metrics:

- **Niche**: Healthcare/Pharmacy (High CPC: $1-3)
- **Traffic**: Morocco/France (Medium CPM: $2-5)
- **Engagement**: High (users actively searching medications)

### Revenue Estimates (Monthly)

| Daily Users | Page Views | Est. Revenue |
|-------------|------------|--------------|
| 100 | 300 | $15 - $45 |
| 500 | 1,500 | $75 - $225 |
| 1,000 | 3,000 | $150 - $450 |
| 5,000 | 15,000 | $750 - $2,250 |

*Actual revenue depends on CTR (Click-Through Rate), CPC, and traffic quality.*

---

## 🎯 Optimization Tips

### 1. Ad Performance
- Monitor which placements get most clicks
- A/B test different ad formats
- Adjust sizes based on device (responsive ads)

### 2. User Experience
- Keep load times fast
- Don't add too many ads at once
- Use native ad styles when possible

### 3. Compliance
- Add Privacy Policy (required for AdSense)
- Include Cookie Consent banner
- Follow AdSense program policies

### 4. Alternative Networks

Consider these alternatives/additions:

- **Media.net** - Good for French/Arabic content
- **PropellerAds** - No approval needed, instant start
- **Ezoic** - AI-powered ad optimization (requires 10k+ monthly visits)
- **Amazon Associates** - Affiliate links for pharmacy products

---

## 📱 Current Setup (Development)

Currently using **PlaceholderAd** components:
- Shows gray boxes with "Advertisement" text
- Perfect for layout testing
- No actual ads displayed

### To Go Live:
1. Get AdSense approval
2. Update `AdBanner.tsx` with your Publisher ID
3. Replace all `PlaceholderAd` with `AdBanner`
4. Deploy to production
5. Wait 24-48 hours for ads to appear

---

## 🔒 Privacy & Legal

### Required Pages:

1. **Privacy Policy** - Required by AdSense
   - Create at `/privacy-policy`
   - Include cookie usage, AdSense disclosure

2. **Terms of Service**
   - Create at `/terms`
   - Disclaimer about medical information

3. **Cookie Consent Banner**
   - Add EU GDPR compliant cookie consent
   - Popular option: [Cookie Consent](https://www.npmjs.com/package/vanilla-cookieconsent)

---

## 📈 Tracking & Analytics

Recommended tools:

1. **Google Analytics 4**
   - Track page views, user behavior
   - Monitor ad performance correlation

2. **Google AdSense Reports**
   - Daily revenue tracking
   - CTR and CPM metrics
   - Top-performing ad units

3. **Search Console**
   - SEO performance
   - Traffic sources
   - Keyword rankings

---

## 🚨 Important Notes

⚠️ **Before Going Live:**
- Test on mobile devices
- Check page load speed
- Verify ads don't break layout
- Ensure RTL (Arabic) layout works properly
- Test both French and Arabic versions

✅ **Best Practices:**
- Minimum 30% content-to-ad ratio
- Never click your own ads (AdSense violation)
- Don't encourage users to click ads
- Keep valuable content above ads
- Monitor for policy violations

---

## 📧 Support

For monetization questions:
- AdSense Help: https://support.google.com/adsense
- AdSense Community: https://support.google.com/adsense/community

---

**Last Updated:** November 1, 2025
**Status:** Development (Placeholder Ads)
**Next Step:** Apply for Google AdSense approval
