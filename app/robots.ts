import { MetadataRoute } from 'next'
import { domainUrl } from '../components/data/configs'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: domainUrl+'/sitemap.xml',
  }
}
