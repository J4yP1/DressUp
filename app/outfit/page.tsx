'use client';

import React from "react";
import Image from "next/image";
import Navbar from '../../components/Navbar'
import 'tailwindcss/tailwind.css';
import Modal from "@/components/Modal";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


const products = [
  {
    id: 1,
    name: 'T-shirt',
    href: '',
    imageSrc: '/images/espelho1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Preto',
  },

  {
    id: 2,
    name: 'Casaco',
    href: '',
    imageSrc: '/images/espelho2.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Azul',
  },
]

const sortOptions = [
  { name: 'Menos Utilizado', href: '#', current: false },
  { name: 'Mais Utilizado', href: '#', current: false },
  { name: 'Não Utilizado nos Últimos 30 Dias', href: '#', current: false },
]

const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [

  {
    id: 'Estacao',
    name: 'Estação',
    options: [
      { value: 'Inverno', label: 'Inverno', checked: false },
      { value: 'Verao', label: 'Verão', checked: false },
      { value: 'Outono', label: 'Outono', checked: true },
      { value: 'Primavera', label: 'Primavera', checked: false },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Filters() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);


  return (
    <Fragment>
      <div>
        <div style={{
          zIndex: -1,
          position: 'fixed',
          width: "100vw",
          height: "100vh"
        }}>
          <Image
            src="/images/"
            alt="DressUp"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div><Navbar></Navbar></div>
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categorias</h3>
                      <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                        {subCategories.map((category) => (
                          <li key={category.name}>
                            <a href={category.href} className="block px-2 py-3">
                              {category.name}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">OutFits</h1>

              <div className="flex items-center">
                <div className="group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900 pr-12">
                  <button className="w-full rounded border hover:text-gray-500 py-2 px-2 text-center" onClick={() => setShowModal3(true)}>
                    <h1>
                      Criar Novo OutFit +
                    </h1>
                  </button>
                </div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Filtrar
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filtros</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Produtos
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categorias</h3>
                  <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {
                    <div className="mx-auto">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                          <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div className="mt-4 flex justify-between">
                              <div>
                                <h3 className="text-sm text-gray-700">
                                  <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                  <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <button className="text-sm border rounded" onClick={() => setShowModal4(true)} >Editar</button>
                    <button className="text-sm border rounded" onClick={() => setShowModal4(true)}>Editar</button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
        <div className="p-3">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Introduza as Informações!
          </h3>
          <form>
            <div>
              <h3 className="text-sm " >Nome:</h3>
              <input
                id="Surname"
                placeholder='Surname'
                name="Surname"
                type="first-name"
                autoComplete="first-name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm " >Descrição:</h3>
              <input
                id="Surname"
                placeholder='Surname'
                name="Surname"
                type="first-name"
                autoComplete="first-name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm " >Temperatura:</h3>
              <input
                id="Surname"
                placeholder='Surname'
                name="Surname"
                type="first-name"
                autoComplete="first-name"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm">Estação:</h3>
              <select id="country" name="country" autoComplete="country-name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-s">
                <option>Inverno</option>
                <option>Verão</option>
                <option>Outono</option>
                <option>Primavera</option>
              </select>
            </div>
            <div className="mt-2 col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6">
                Foto
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-2">
                <div className="text-center">
                  <div className="mt-1 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="w-full rounded bg-purple-500 hover:bg-purple-400 py-2 text-center text-white">Registrar</button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal isVisible={showModal4} onClose={() => setShowModal4(false)}>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 px-3">
          Informações
        </h3>
        <div className="px-3 flex flex-col lg:flex-row w-10/12 lg:w-8/12">
          <img
            src="/images/espelho1.jpg"
            alt="App screenshot"
            width={250}
            height={50}
          />
          <div className="w-full px-12">
            <h2 className="text-sm font-bold tracking-tight text-gray-900 mb-1">Nome:</h2>
            <span className="text-sm" >Summer!!</span>
            <h2 className="text-sm mt-2 font-bold tracking-tight text-gray-900 mb-1">Descrição:</h2>
            <span className="text-sm" >Outfit básico, com apenas um top preto, calças de ganga azul e sapatilhas coloridas.</span>
            <h2 className="text-sm mt-2 font-bold tracking-tight text-gray-900 mb-1">Temperatura:</h2>
            <span className="text-sm" >Dias Ensolarados</span>
            <h2 className="text-sm mt-2 font-bold tracking-tight text-gray-900 mb-1">Estação:</h2>
            <span className="text-sm" >Verão</span>
            <div className="mt-3 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                type="submit"
                className="w-full px-6 border rounded bg-white hover:bg-gray-300 py-3 text-center"
              >
                Editar
              </button>
              <button
                type="submit"
                className="w-full px-6 border rounded bg-white hover:bg-gray-300 py-3 text-center"
              >
                Apagar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  )
}