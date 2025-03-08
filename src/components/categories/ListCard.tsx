import { categories } from '@/models'
import React from 'react'
import { Card } from '../ui/Card'


export const ListCard = () => {
  return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6  ">
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {
                    categories?.map(
                            category => <Card key={category.name} name={category.name} route={category.route as string} description={category.Description} />
                            
                        )
                    
                    }
                </div>
            </div>
        </section>
  )
}
