'use client'
import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import { Bed, Car, ImageUp, MapPinHouse, PlusCircle, Ruler, Toilet } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Propertys() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
        }
    };

    const { register, handleSubmit } = useForm()

    return (

        <div className="mb-28">
            <Modal modalTitle="Adicionar imóvel">
                <form onSubmit={handleSubmit((data) => {
                    console.log(data)
                })}>

                    {/*Input image*/}
                    <div>
                        <input className="hidden" {...register("imagesProperty")} type="file" id="file-upload" multiple onChange={handleFileChange} />
                        <div className={`grid ${selectedFiles.length > 0 ? "grid-cols-3 md:grid-cols-4 gap-2" : "grid-cols-1"} mt-4`}>
                            {selectedFiles.length > 0 ? (
                                selectedFiles.map((file, index) => (
                                    <div key={index} className="overflow-hidden w-full relative flex justify-center">
                                        <Image src={URL.createObjectURL(file)} height={50} width={50} className="rounded-md w-40 h-40 md:w-60 md:h-60 lg:h-80 lg:w-80 object-cover" alt="images propertys" />
                                    </div>
                                ))
                            )
                                : (
                                    <div className="w-full flex justify-center h-80 bg-black/5 rounded-lg">
                                        <p className="gap-x-5 flex text-xl font-medium items-center">Nenhuma imagem selecionada<ImageUp size={14} /></p>
                                    </div>
                                )
                            }
                        </div>
                        <label
                            htmlFor="file-upload"
                            className="mt-4 cursor-pointer flex gap-x-5 items-center p-5 justify-center w-full h-full text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
                        >
                            <ImageUp size={18} /> <p className="text-xl font-semibold">Adicional Fotos</p>
                        </label>
                    </div>

                    <div className="grid gap-5 mt-10">
                        <div id="title">
                            <label htmlFor="title" className="grid mb-1 font-semibold text-lg focus-visible:border-blue-600">Título</label>
                            <input required type="text" name="title" id="title" className="px-3 py-2 rounded-md text-lg border-[#E5E7EB] border w-full focus:border-blue-500" placeholder="Sobrado com dois quartos..." />
                        </div>
                        <div id="description">
                            <label className="font-semibold grid mb-1 text-lg" htmlFor="description">Descrição</label>
                            <textarea required name="description" id="description" className="focus:border-blue-500 px-3 py-2 rounded-md text-lg  border h-40 w-full" placeholder="Linda casa com dois quartos localizado em Jardim Camburi, Vitória, já reformado, com luz inclusa." />
                        </div>
                        <div id="status">
                            <label htmlFor="status" className="font-semibold mb-2 text-lg">Status do imóvel</label>
                            <div className="flex items-center my-1 gap-x-10 text-lg">
                                <div className="flex gap-x-1">
                                    <input type="radio" name="status" value='available' id="available" />
                                    <label className="font-semibold flex text-base" htmlFor="available">Disponível</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input type="radio" name="status" value='Occupied' id="occupied" />
                                    <label className="font-semibold flex text-base" htmlFor="occupied">Ocupado</label>
                                </div>
                            </div>
                        </div>
                        <div id="type" className="grid">
                            <label htmlFor="type" className="font-semibold grid mb-1 text-lg">Tipo</label>
                            <select required className="p-2 bg-white border rounded-lg focus:border-blue-600 text-lg" name="type" id="type" >
                                <option value="house">{'Casa'}</option>
                                <option value="apartment">{'Apartamento'}</option>
                                <option value="kitnet">{'Kitnet'}</option>
                                <option value="room">{'Quarto'}</option>
                                <option value="penthouse">{'Cobertura'}</option>
                                <option value="condominium house">{'Casa de condomínio'}</option>
                                <option value="duplex triplex">{'Apartamento Duplex / Triplex'}</option>
                                <option value="village house">{'Casa de vila'}</option>
                                <option value="loft">{'Loft'}</option>
                                <option value="land ranch farm">{'Terreno / Sítio / Fazenda'}</option>
                                <option value="office store">{'Escritório / Loja'}</option>
                                <option value="storage">{'Galpão / Depósito'}</option>
                                <option value="others">{'Outros'}</option>
                            </select>
                        </div>
                        <div id="room" className="grid">
                            <label className="font-semibold grid mb-1 text-lg" htmlFor="room">Número de quartos</label>
                            <select required className="p-2 bg-white border rounded-lg focus:border-blue-600 text-lg" name="room" id="room">
                                <option value="1">{'1'}</option>
                                <option value="2">{'2'}</option>
                                <option value="3">{'3'}</option>
                                <option value="4">{'4'}</option>
                                <option value="5 ou mais">{'5 ou mais'}</option>
                                <option value="not">{'Não se aplica'}</option>
                            </select>
                        </div>
                        <div id="bathrooms" className="grid">
                            <label className="font-semibold grid mb-1 text-lg" htmlFor="bathrooms">Número de banheiros</label>
                            <select required className="p-2 bg-white border rounded-lg focus:border-blue-600 text-lg" name="bathrooms" id="bathrooms">
                                <option value="1">{'1'}</option>
                                <option value="2">{'2'}</option>
                                <option value="3">{'3'}</option>
                                <option value="4">{'4'}</option>
                                <option value="5 ou mais">{'5 ou mais'}</option>
                                <option value="not">{'Não se aplica'}</option>
                            </select>
                        </div>
                        <div id="parking" className="grid">
                            <label className="font-semibold grid mb-1 text-lg" htmlFor="parking">Vagas na garagem</label>
                            <select required className="p-2 bg-white border rounded-lg focus:border-blue-600 text-lg" name="parking" id="parking">
                                <option value="1">{'1'}</option>
                                <option value="2">{'2'}</option>
                                <option value="3">{'3'}</option>
                                <option value="4">{'4'}</option>
                                <option value="5 ou mais">{'5 ou mais'}</option>
                                <option value="not">{'Não se aplica'}</option>
                            </select>
                        </div>
                        <div id="squareMeters" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="squareMeters">Área (m<sup className="text-xs">2</sup>)</label>
                            <input placeholder="100" type="number" id="squareMeters" name="squareMeters" className="w-full p-[9.5px] rounded-lg border-[#E5E7EB] border text-lg" />
                        </div>
                        <div id="condominium" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="condominium">Condomínio (R$)</label>
                            <input placeholder="300,00" type="number" id="condominium" name="condominium" className="w-full p-[9.5px] rounded-lg border-[#E5E7EB] border text-lg" />
                        </div>
                        <div id="iptu" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="iptu">IPTU (R$)</label>
                            <input placeholder="300,00" type="number" id="iptu" name="iptu" className="w-full p-[9.5px] rounded-lg border-[#E5E7EB] border text-lg" />
                        </div>
                        <div id="iptuResponsibility">
                            <label htmlFor="iptuResponsibility" className="font-semibold my-2 items-center text-lg">Repasse de IPTU<i className="uil pl-2 text-blue-500 uil-info-circle" /></label>
                            <div className="flex items-center my-1 gap-x-10">
                                <div className="flex gap-x-1">
                                    <input type="radio" name="iptuResponsibility" id="lessor" value="lessor" />
                                    <label className="font-semibold flex text-base" htmlFor="lessor">Propietário</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input type="radio" name="iptuResponsibility" id="lessee" value="lessee" />
                                    <label className="font-semibold flex text-base" htmlFor="lessee">Inquilino</label>
                                </div>
                            </div>
                        </div>
                        <div id="price" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="price">Preço (R$)</label>
                            <input placeholder="1000,00" type="number" id="price" name="price" className="w-full p-[9px] text-lg rounded-lg border-[#E5E7EB] border" />
                        </div>
                        <div id="security deposit" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="security deposit">Caução (R$)</label>
                            <select required className="p-2 px-[5px] bg-white border rounded-lg focus:border-blue-600 text-lg" name="security deposit" id="security deposit">
                                <option value="not">{'Sem caução'}</option>
                                <option value="1">{'1 Aluguel'}</option>
                                <option value="2">{'2 Alugueis'}</option>
                                <option value="3">{'3 Alugueis'}</option>
                            </select>
                        </div>
                        <div id="adress" className="grid">
                            <label className="font-semibold flex mb-1 text-lg" htmlFor="adress">Localização</label>
                            <input placeholder="CEP" type="number" id="adress" name="adress" className="w-full p-[9px] rounded-lg border-[#E5E7EB] border text-lg" />
                        </div>
                    </div>

                    <input type="submit" value="Salvar" className="text-2xl bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 text-white w-full py-5 mt-5 font-semibold" />
                </form>
            </Modal>
            <header className="border-b w-full border-black/20 py-8 mx-auto max-w-[90%]">
                <Header />
            </header>
            <div className="gap-x-2 flex justify-end text-xl py-5 max-w-[90%] mx-auto">
                <span className="cursor-pointer flex items-center gap-x-2 text-base">
                    <PlusCircle size={16} />
                    <p className="text-lg font-semibold">Adicionar imóvel</p>
                </span>
            </div>
            <div className="max-w-[90%] mx-auto">
                <Card title="Casa em santa tereza, três quartos, sala, cozinha americana sala, cozinha americana" home>
                    <div className="flex h-full">
                        <Image src={'/testehome.jpg'} width={300} height={300} className="min-w-[0%] max-w-[35%] p-1 rounded-xl border border-black/50" alt="photo home" />
                        <div className="flex flex-col w-full h-full justify-around pl-5">
                            <section className="flex items-center justify-between">
                                <span className="text-2xl flex gap-x-1 font-medium max-w-[100%]"><p className="text-lg">R$</p> {'1200'},00</span>
                                <span className="text-lg text-white text-center px-3 py-2 rounded-full bg-red-400">Ocupado</span>
                            </section>
                            <section>
                                <p className="text-lg font-medium">Caução: {'3'} meses</p>
                            </section>
                            <section className="flex font-medium py-1 gap-x-4">
                                <p className="text-base font-medium flex gap-x-1 items-center"><Bed size={10} strokeWidth={2} />{'3'}</p>
                                <p className="text-base font-medium flex gap-x-1 items-center"><Car size={10} strokeWidth={2} />{'2'}</p>
                                <p className="text-base font-medium flex gap-x-1 items-center"><Toilet size={10} strokeWidth={2} />{'3'}</p>
                                <p className="text-base font-medium flex gap-x-1 items-center"><Ruler size={10} strokeWidth={2} />{'204'}m<sup className="text-[6px]">2</sup></p>
                            </section>
                            <section className="flex items-center gap-x-2">
                                <MapPinHouse strokeWidth={3} color="#4d6bbe" size={10} /><p className="text-sm font-semibold text-blue-600">Vila nova, Santa Tereza</p>
                            </section>
                        </div>
                    </div>
                </Card>
            </div>
        </div >
    )
}
