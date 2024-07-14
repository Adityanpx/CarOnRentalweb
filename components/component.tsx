"use client"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Component() {
  const cars = [
    {
      id: 1,
      image: "https://imgd.aeplcdn.com/370x208/n/qmu56ra_1421817.jpg?q=75&q=75",
      model: "Toyota Corolla",
      rentalRate: 25,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 2,
      image: "https://www.vegasautogallery.com/imagetag/2308/5/l/Used-2016-Land-Rover-Range-Rover-Sport-50L-V8-Supercharged-1677796192.jpg",
      model: "Range Rover Vellar",
      rentalRate: 30,
      transmission: "Manual",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 3,
      image: "https://imgd.aeplcdn.com/1920x1080/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0&q=80&q=80",
      model: "Ford Mustang",
      rentalRate: 45,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 4,
      image: "https://pnghq.com/wp-content/uploads/tesla-model-3-review-and-buyers-guide-31974.png",
      model: "Tesla Model 3",
      rentalRate: 60,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: true,
    },
    {
      id: 5,
      image: "https://img.freepik.com/premium-photo/car-isolated-white-background-nissan-leaf-white-car-blank-clean-white-backgrou-white-black_655090-606572.jpg",
      model: "Nissan Leaf",
      rentalRate: 35,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: true,
    },
    {
      id: 6,
      image: "https://img.freepik.com/premium-photo/car-isolated-white-background-jeep-wrangler-white-car-blank-clean-white-backgr-white-black_655090-607390.jpg",
      model: "Jeep Wrangler",
      rentalRate: 40,
      transmission: "Manual",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 7,
      image: "https://img.freepik.com/premium-photo/car-isolated-white-background-bmw-white-car-blank-clean-white-background-turn-white-black_655090-606170.jpg",
      model: "BMW 3 Series",
      rentalRate: 50,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 8,
      image: "https://i.pinimg.com/736x/7e/0a/a8/7e0aa84d06c32479e0090b16508a2363.jpg",
      model: "Hyundai Sonata",
      rentalRate: 28,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 9,
      image: "https://cdn-image-handler.oem-production.subaru.com.au/vehicle/2024/outback/my24-outback-awd-sport-xt-crystalwhitepearl-front.png",
      model: "Subaru Outback",
      rentalRate: 35,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 10,
      image: "https://c4.wallpaperflare.com/wallpaper/252/479/612/land-rover-range-rover-land-rover-lwb-2013-la-auto-hd-wallpaper-preview.jpg",
      model: "land Rover",
      rentalRate: 32,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 11,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp7KMzy5BhJfgsq6iSuhgRhrCMNmISToxbH2zFVZpFpM8Mgwo3HNHfQ9tnXhfzojIsOc&usqp=CAU",
      model: "Volkswagen Jetta",
      rentalRate: 27,
      transmission: "Manual",
      airConditioning: true,
      hybrid: false,
    },
    {
      id: 12,
      image: "https://pngimg.com/d/mazda_PNG79.png",
      model: "Mazda CX-5",
      rentalRate: 38,
      transmission: "Automatic",
      airConditioning: true,
      hybrid: false,
    },
  ]
  const [selectedCar, setSelectedCar] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const handleAddToCart = (car) => {
    setSelectedCar(car)
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setSelectedCar(null)
    setShowModal(false)
  }
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Car Rental</h1>
            <p className="text-muted-foreground">Find the perfect car for your next adventure.</p>
          </div>
        </div>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cars.map((car) => (
            <li key={car.id} className="grid gap-4">
              <div className="grid gap-2.5 relative group">
                <a href={car.image} className="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={car.image}
                    alt={car.model}
                    width={500}
                    height={375}
                    className="rounded-md object-cover w-full aspect-video group-hover:opacity-50 transition-opacity"
                  />
                </a>
                <div className="grid gap-2">
                  <h3 className="font-semibold">{car.model}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSignIcon className="w-4 h-4" />
                    <span>${car.rentalRate}/hr</span>
                    <Separator orientation="vertical" className="h-4" />
                    <span>{car.transmission}</span>
                    <Separator orientation="vertical" className="h-4" />
                    <AirVentIcon className="w-4 h-4" />
                    <Separator orientation="vertical" className="h-4" />
                    <CarIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => handleAddToCart(car)}>
                Book a ride
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={showModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Customize Your Rental</DialogTitle>
            <DialogDescription>Review and customize the details of your rental.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="pickup-date">Pickup Date</Label>
              <Input id="pickup-date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="return-date">Return Date</Label>
              <Input id="return-date" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="pickup-time">Pickup Time</Label>
              <Input id="pickup-time" type="time" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="return-time">Return Time</Label>
              <Input id="return-time" type="time" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="additional-options">Additional Options</Label>
              <Textarea id="additional-options" rows={3} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button>Reserve</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function AirVentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
