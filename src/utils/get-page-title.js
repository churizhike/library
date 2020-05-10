import defaultSettings from '@/settings'

const title = defaultSettings.title || 'TYD Users Data Analytics System'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
