import './App.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Header from './header'

function App() {

  return (
    <>
      <Header />

      <Accordion type="single" collapsible className="w-96 mx-auto my-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Hvað er React?
          </AccordionTrigger>
          <AccordionContent>
            React er JavaScript bókasafn fyrir að byggja notendaviðmót.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Hvað er Vite?
          </AccordionTrigger>
          <AccordionContent>
            Vite er hraður byggingarverkfæri og þróunarþjónn fyrir nútíma vefumsóknir.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Hvað er Vite?
          </AccordionTrigger>
          <AccordionContent>
            Vite er hraður byggingarverkfæri og þróunarþjónn fyrir nútíma vefumsóknir.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className='w-full flex justify-center'>
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}

export default App
