<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { mapState } from 'vuex';

export default {
    setup() {
        const calendarValue = ref(null);
        const toast = useToast();

        const totalSize = ref(0);
        const totalSizePercent = ref(0);
        const files = ref([]);

        const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
            removeFileCallback(index);
            totalSizePercent.value = totalSize.value / 10;
        };

        const onSelectedFiles = (event) => {
            files.value = event.files;
        };

        const onTemplatedUpload = () => {
            toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        };

        return {
            calendarValue,
            totalSize,
            totalSizePercent,
            files,
            onRemoveTemplatingFile,
            onSelectedFiles,
            onTemplatedUpload
        };
    },
    computed: {
        ...mapState(['user'])
    }
};
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <Toast />
                <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
                    <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                        <div v-if="files.length > 0">
                            <div class="flex flex-wrap justify-content-center align-items-center flex-column p-0 gap-5">
                                <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 flex flex-column surface-border align-items-center gap-3" style="object-fit: cover">
                                    <div>
                                        <Image preview role="presentation" :alt="file.name" :src="file.objectURL" width="150" height="150" class="shadow-2" style="object-fit: cover" />
                                    </div>
                                    <span class="font-semibold">trancongtien</span>

                                    <Badge value="Pending" severity="warning" />
                                    <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" outlined rounded severity="danger" />
                                </div>
                            </div>
                        </div>

                        <div v-if="uploadedFiles.length > 0">
                            <h5>Completed</h5>
                            <div class="flex flex-wrap p-0 sm:p-5 gap-5">
                                <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                                    <div>
                                        <img role="presentation" :alt="file.name" :src="file.objectURL" width="150" height="150" class="shadow-2" style="object-fit: cover" />
                                    </div>
                                    <span class="font-semibold">tien</span>
                                    <Badge value="Completed" class="mt-3" severity="success" />
                                    <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded severity="danger" />
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #empty>
                        <div class="flex align-items-center justify-content-center flex-column">
                            <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                            <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                        </div>
                    </template>
                </FileUpload>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Thông tin cá nhân</h5>
                <div class="field">
                    <label for="uuid">Mã sinh viên</label>
                    <InputText id="uuid" type="text" />
                </div>
                <div class="field">
                    <label for="name">Tên</label>
                    <InputText id="name" type="text" :value="user.name" />
                </div>
                <div class="field">
                    <label for="email1">Email</label>
                    <InputText id="email1" type="text" :value="user.email" disabled />
                </div>
                <div class="field">
                    <label for="phone">phone</label>
                    <InputText id="phone" type="text" name="phone" />
                </div>
                <div class="field">
                    <label for="date">Ngày sinh</label>
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" name="date" />
                </div>
                <div class="field">
                    <label for="address">Address</label>
                    <Textarea id="address" rows="4" name="address" />
                </div>
                <Button label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
<style lang="css">
.p-fileupload-file-thumbnail {
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>
