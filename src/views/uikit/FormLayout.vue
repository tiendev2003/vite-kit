<script setup>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const calendarValue = ref(null);

const onUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Ảnh cá nhân</h5>
                <FileUpload name="demo[]" url="./upload.php" @uploader="onUpload()" :multiple="true" accept="image/*" :maxFileSize="1000000">
                    <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                    </template>
                </FileUpload>
            </div>
        </div>

        <div class="col-12 md:col-6">
            <div class="card p-fluid">
                <h5>Thông tin cá nhân</h5>
                <div class="field">
                    <label for="uuid">Mã sinh viên</label>
                    <InputText id="uuid" type="text"  value="" />
                </div>
                <div class="field">
                    <label for="name">Tên</label>
                    <InputText id="name" type="text" />
                </div>
                <div class="field">
                    <label for="email1">Email</label>
                    <InputText id="email1" type="text" />
                </div>
                <div class="field">
                    <label for="phone">phone</label>
                    <InputText id="phone" type="text" />
                </div>
                <div class="field">
                    <label for="date">Ngày sinh</label>
                    <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue" />
                </div>
                <div class="field">
                    <label for="address">Address</label>
                    <Textarea id="address" rows="4" />
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
