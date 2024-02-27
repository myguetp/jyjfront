<script lang="ts">
import { defineComponent, ref } from "vue";
import TheButtonjyj from "../../../components/TheButtonjyj.vue";
import { Input as FlowInput, Textarea as FlowTexarea } from "flowbite-vue";
import { useMutationSales } from "./useMutationSales";

import Multiselect from "@vueform/multiselect";
import { useSaleStore } from "./store/saleStore";
import { useQueryRoomData } from "../../../composable/leases/roomComposable";
import { useQueryRestroomData } from "../../../composable/leases/restroomComposable";
import { useQueryStratumData } from "../../../composable/leases/stratumComposable";
import { useQueryPropertyData } from "../../../composable/leases/propertyComposable";
import { useQueryAntiquityData } from "../../../composable/leases/antiquityComposable";
import { useQueryParkingData } from "../../../composable/leases/parkingComposable";
import { useQueryOferData } from "../../../composable/leases/oferComposable";
import { useQueryCityData } from "../../../composable/leases/cityComposable";
import { useHttpStore } from "@/services/store/httpstore";

interface Picture {
  originalname: string;
  filename:     string;
  mimetype:     string;
  size:         number;
}  

export default defineComponent({
  components: { TheButtonjyj, FlowInput, FlowTexarea, Multiselect },
  setup() {
    const storeSale = useSaleStore();

    const ofert = ref("");
    const email = ref("");
    const phone = ref("");
    const flower = ref("");
    const neighborhood = ref("");
    const city = ref("");
    const country = ref("");
    const property = ref("");
    const stratum = ref("");
    const price = ref("");
    const room = ref("");
    const restroom = ref("");
    const age = ref("");
    const administration = ref("");
    const area = ref("");
    const description = ref("");
    const parking = ref("");
    const picture = ref([]);

    const storehttp = useHttpStore();
    const idUser =  storehttp.idUser

    const { mutate: mutateSales } = useMutationSales(idUser);

    const handleRegistrationSales = async () => {
      const pictures: Picture[] = allimg.value.map((file) => {
        console.log('file', file)
        return {
          originalname: file.originalname,
          filename: file.filename,
          mimetype: file.mimetype,
          size: file.size
        };
      });
      await mutateSales({
        ofert: ofert.value,
        email: email.value,
        phone: phone.value,
        parking: parking.value,
        flower: flower.value,
        neighborhood: neighborhood.value,
        country: country.value,
        city: city.value,
        property: property.value,
        stratum: stratum.value,
        price: +price.value,
        room: room.value,
        restroom: restroom.value,
        age: age.value,
        administration: administration.value,
        area: +area.value,
        description: description.value,
        files: pictures
      });
    };

    const onSubmit = () => {
     handleRegistrationSales();
    };

    const selectedImgIndex = ref(0);

    const allimg = ref<Picture[]>([]);

    console.log('allImg dd', allimg)
 
    const addimg = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files && files.length > 0) {
    if (allimg.value.length + files.length > 10) {
      alert("No se pueden agregar más de 10 archivos.");
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file instanceof Blob) {
        const fileInfo = {
          originalname: file.name,
          filename: file.name,
          mimetype: file.type,
          size: file.size,
        };
        allimg.value.push(fileInfo);
      } else {
        console.error("El archivo no es de tipo Blob:", file);
      }
    }
  }

  selectedImgIndex.value = allimg.value.length - 1;
};

const getImgPreview = (fileInfo: any): string => {
  // Puedes acceder a la propiedad 'originalname' o cualquier otra propiedad que necesites
  const preview = URL.createObjectURL(new Blob(fileInfo));
  console.log('Preview URL:', preview);
  return preview;
};
    const removeImg = (index: any) => {
      allimg.value.splice(index, 1);
    };

    const selectImg = (index: any) => {
      selectedImgIndex.value = index;
    };

    const { data: roomData, isLoading: roomLoading } = useQueryRoomData();
    const { data: restromData, isLoading: restroomLoading } = useQueryRestroomData();
    const { data: stratumData, isLoading: stratumLoading } = useQueryStratumData();
    const { data: propertyData, isLoading: propertyLoading } = useQueryPropertyData();
    const { data: antiquiyData, isLoading: antiquityLoading } = useQueryAntiquityData();
    const { data: parkingData, isLoading: parkingLoading } = useQueryParkingData();
    const { data: ofertData, isLoading: ofertLoading } = useQueryOferData();
    const { data: cityData, isLoading: cityLoading } = useQueryCityData();
    
    return {
      allimg,
      onSubmit,
      addimg,
      getImgPreview,
      selectImg,
      removeImg,
      parkingData,
      parkingLoading,
      selectedImgIndex,
      ofert,
      ofertData,
      ofertLoading,
      neighborhood,
      city,
      phone,
      email,
      country,
      property,
      stratum,
      price,
      room,
      restroom,
      parking,
      age,
      administration,
      area,
      description,
      picture,
      storeSale,
      roomData,
      roomLoading,
      restromData,
      restroomLoading,
      stratumData,
      stratumLoading,
      propertyLoading,
      propertyData,
      antiquiyData,
      antiquityLoading,
      cityData,
      cityLoading
    };
  },
});
</script>
<template>
  <section class="flex justify-center">
    <form class="block w-[80%] h-[80%]">
      <div class="block gap-6 p-8 w-full">
        <p class="text-[30px] underline underline-offset-8 font-bold">
          Publica tu Inmueble
        </p>
        <section class="block lg:flex w-full">
          <div class="block w-full lg:w-[30%] mt-10 pt-4">
            <div v-if="ofertLoading" class="loading-indicator">Cargando datos...</div>

            <Multiselect
              v-else
              id="ofert"
              v-model="ofert"
              :options="
                ofertData?.data.map((ofert) => ({
                  value: ofert.id,
                  label: ofert.name,
                }))
              "
              class="h-[68px] rounded-md"
              placeholder="Tipo de oferta"
            />
            <div class="mt-2">
              <div v-if="propertyLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                v-else
                id="property"
                v-model="property"
                :options="
                  propertyData?.data.map((property) => ({
                    value: property.id,
                    label: property.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Tipo de inmueble"
              />
            </div>
            <div class="mt-2">
              <div v-if="restroomLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="restroom"
                v-model="restroom"
                :options="
                restromData?.data.map((restroom) => ({ value: restroom.id, label: restroom.name }))
                "
                class="h-[68px] rounded-md"
                placeholder="Número de baños"
              />
            </div>
            <div class="mt-2">
              <div v-if="roomLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                id="room"
                v-model="room"
                :options="
                  roomData?.data.map((room) => ({
                    value: room.id,
                    label: room.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Número de habitaciones"
              />
            </div>
            <div class="mt-2">
              <div v-if="stratumLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="stratum"
                v-model="stratum"
                :options="
                  stratumData?.data.map((stratum) => ({
                    value: stratum.id,
                    label: stratum.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Estrato"
              />
            </div>

            <div class="mt-2">
              <div v-if="parkingLoading" class="loading-indicator">Cargando datos...</div>

              <Multiselect
                id="parking"
                v-model="parking"
                :options="
                  parkingData?.data.map((parking) => ({
                    value: parking.id,
                    label: parking.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Parqueadero"
              />
            </div>

            <div class="mt-2">
              <div v-if="antiquityLoading" class="loading-indicator">
                Cargando datos...
              </div>

              <Multiselect
                id="age"
                v-model="age"
                :options="
                  antiquiyData?.data.map((age) => ({
                    value: age.id,
                    label: age.name,
                  }))
                "
                class="h-[68px] rounded-md"
                placeholder="Antiguedad del inmueble"
              />
            </div>
          </div>
          <div class="block w-full lg:w-[30%] lg:ml-4">
            <FlowInput
              id="price"
              v-model="price"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Precio"
            />
            <FlowInput
              id="neighborhood"
              v-model="neighborhood"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Barrio"
            />
            <FlowInput
              id="city"
              v-model="city"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Ciudad"
            />
            <FlowInput
              id="country"
              v-model="country"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="País"
            />
            <FlowInput
              id="administration"
              v-model="administration"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="valor administración"
            />
            <FlowInput
              id="area"
              v-model="area"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Área construída"
            />
            <FlowInput
              id="email"
              type="email"
              v-model="email"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Correo electronico"
            />
            <FlowInput
              id="phone"
              v-model="phone"
              class="w-full h-[68px] mt-2 rounded-md"
              placeholder="Celular"
            />
          </div>

          <div class="block w-full lg:w-[40%] mt-16 ml-4">
            <div class="mt-2 border-gray-600">
              <section class="block w-full mt-16">
                <div class="mt-2 border-gray-600 w-full">
                  <section class="block w-full mt-16">
                    <div class="mt-2 border-gray-600 w-full">
                      <section id="multi-selector-uniq" class="mb-4 w-full">
                          <input
                            id="files"
                            type="file"
                            multiple
                            @change="addimg"
                            class="mb-4"
                          />
                          <div id="preview" class="flex w-full h-[100%] gap-2 border border-gray-400">
                            <div v-for="(file, index) in allimg" :key="file.originalname" class="relative">
                              <img
                                :src="getImgPreview(file)"
                                alt="Vista Previa de la Imagen"
                                :class="{ 'selected-img': index === selectedImgIndex }"
                                class="flex w-full h-60 object-cover rounded cursor-pointer"
                                @click="selectImg(index)"
                              />
                              <button
                                @click="removeImg(index)"
                                class="absolute top-0 right-0 text-black bg-white p-1 rounded-full cursor-pointer font-bold"
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </section>
                    </div>
                  </section>
                </div>
              </section>
            </div>
            <div class="mt-4">
              <FlowTexarea
                v-model="description"
                class="w-full h-[280px] rounded-md resize-none"
                placeholder="Descripción del inmueble"
                label=""
              />
            </div>
          </div>
          
        </section>
      </div>
          <div class="flex justify-center lg:justify-end pb-4">
            <TheButtonjyj class="text-white font-bold" texto="Guardar" @click="onSubmit" />
          </div>
    </form>
  </section>
</template>

<style src="@vueform/multiselect/themes/default.css">
.multiselect {
  border-radius: 20px !important;
}

.selected-img {
  transform: scale(1.8); /* O el factor de escala que prefieras */
  border: 2px solid #00f; /* O el color de borde que prefieras */
}
</style>
