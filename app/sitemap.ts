import { MetadataRoute } from 'next'
import { domainUrl, ogImage } from '../components/data/configs'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: domainUrl,
      lastModified: new Date(),
      priority: 1,
      images: [domainUrl+ogImage],
    },
  ]
}
